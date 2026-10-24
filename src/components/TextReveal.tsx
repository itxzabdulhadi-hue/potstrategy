import { useEffect } from 'react';

/**
 * Global scroll-triggered text reveal.
 *
 * One IntersectionObserver watches every text-bearing element on the page. Each
 * element fades from opacity 0 and rises 16px into place (600ms, ease-out) the
 * first time ~15% of it enters the viewport, then is unobserved for good.
 *
 * Because the browser can deliver intersection entries in several small batches
 * even when a whole section arrives at once, the stagger is not derived from the
 * callback: every element knows its reading-order position inside its section,
 * and neighbours that arrive close together are revealed 100ms apart.
 *
 * Safety properties:
 * - Hiding is applied only from JS (`<html class="text-reveal">`), so a script
 *   failure leaves all copy visible.
 * - Reduced-motion visitors never get the hiding state at all.
 * - A one-off fallback pass reveals anything already on screen if the observer
 *   ever fails to fire.
 */

const REVEAL_ATTR = 'data-reveal';
const SKIP_ATTR = 'data-reveal-skip';
const REVEALED_CLASS = 'is-revealed';
const ROOT_CLASS = 'text-reveal';
const THRESHOLD = 0.15;
const STAGGER_MS = 100;
const MAX_STAGGER_MS = 600;
/** Elements arriving within this window of their neighbour count as one wave. */
const WAVE_MS = 700;

const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'BR',
  'HR',
  'IMG',
  'SVG',
  'PATH',
  'CIRCLE',
  'RECT',
  'LINE',
  'INPUT',
  'TEXTAREA',
  'SELECT',
  'OPTION',
  'CODE',
  'PRE',
]);

/** Heading-level wrappers whose children give us line-by-line reveals. */
type Target = { element: HTMLElement; section: Element; order: number };

/** True when the element directly owns non-whitespace text. */
function ownsText(el: Element) {
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE && (node.nodeValue ?? '').trim() !== '') return true;
  }
  return false;
}

function isExcluded(el: Element) {
  if (SKIP_TAGS.has(el.tagName)) return true;
  if (el.closest(`[aria-hidden="true"], [${SKIP_ATTR}], svg, .skip-link`)) return true;
  // Screen-reader-only text (visually hidden) has nothing to fade.
  const box = el.getBoundingClientRect();
  if (box.width <= 1 && box.height <= 1) return true;
  return false;
}

function sectionOf(el: Element): Element {
  return el.closest('section, header, footer, .marquee') ?? document.body;
}

/**
 * Collect the elements that actually print text.
 *
 * A paragraph that owns text wins over its inline children (no double fade);
 * a heading whose text lives in separate block spans reveals line by line.
 */
function collectTargets(): Target[] {
  const targets: Target[] = [];
  const chosen = new Set<Element>();
  const perSection = new Map<Element, number>();

  for (const el of Array.from(document.body.querySelectorAll<HTMLElement>('*'))) {
    // Never nest one reveal inside another: that reads as a double fade.
    let nested = false;
    for (let parent = el.parentElement; parent; parent = parent.parentElement) {
      if (chosen.has(parent)) {
        nested = true;
        break;
      }
    }
    if (nested) continue;

    const explicit = el.hasAttribute(REVEAL_ATTR);
    if (!explicit) {
      if (isExcluded(el) || !ownsText(el)) continue;
      if (el.parentElement?.closest(`[${SKIP_ATTR}]`)) continue;
    }

    const section = sectionOf(el);
    const order = perSection.get(section) ?? 0;
    perSection.set(section, order + 1);
    chosen.add(el);
    targets.push({ element: el, section, order });
  }

  return targets;
}

function documentOrder(entryA: IntersectionObserverEntry, entryB: IntersectionObserverEntry) {
  if (entryA.target === entryB.target) return 0;
  // eslint-disable-next-line no-bitwise
  return entryA.target.compareDocumentPosition(entryB.target) & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;
}

export function TextReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduced.matches || typeof IntersectionObserver === 'undefined') return;

    const meta = new WeakMap<Element, Target>();
    const known = new WeakSet<Element>();
    const pending = new Set<HTMLElement>();
    /** Latest revealed element per section, used to continue a wave. */
    const waves = new Map<Element, { order: number; at: number; step: number }>();

    const reveal = (target: Target) => {
      const { element, section, order } = target;
      const now = performance.now();
      const wave = waves.get(section);
      const continues = wave !== undefined && wave.order === order - 1 && now - wave.at < WAVE_MS;
      const step = continues ? wave.step + 1 : 0;
      const delay = Math.min(step * STAGGER_MS, MAX_STAGGER_MS);

      waves.set(section, { order, at: now, step });

      element.style.transitionDelay = `${delay}ms`;
      element.classList.add(REVEALED_CLASS);
      if (pending.has(element)) {
        pending.delete(element);
        observer.unobserve(element);
      }
      window.setTimeout(() => {
        element.style.transitionDelay = '';
      }, delay + 700);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries.filter((entry) => entry.isIntersecting).sort(documentOrder);
        for (const entry of arriving) {
          const target = meta.get(entry.target);
          if (target) reveal(target);
        }
      },
      { threshold: THRESHOLD },
    );

    const register = () => {
      for (const target of collectTargets()) {
        const { element } = target;
        if (known.has(element)) continue;
        known.add(element);
        meta.set(element, target);
        element.setAttribute(REVEAL_ATTR, '');
        pending.add(element);
        observer.observe(element);
      }
    };

    // Turn the hiding class on only once we know we can reveal things again.
    root.classList.add(ROOT_CLASS);
    register();

    // Content mounted later (mobile menu, FAQ answers) joins the same observer.
    let frame = 0;
    const mutation = new MutationObserver(() => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        register();
      });
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    // Fallback: never leave copy invisible if an observer callback is missed.
    const failsafe = window.setTimeout(() => {
      for (const element of Array.from(pending)) {
        const box = element.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) {
          const target = meta.get(element);
          if (target) reveal(target);
        }
      }
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      if (frame) window.cancelAnimationFrame(frame);
      mutation.disconnect();
      observer.disconnect();
      root.classList.remove(ROOT_CLASS);
      document.querySelectorAll<HTMLElement>(`[${REVEAL_ATTR}]`).forEach((element) => {
        element.removeAttribute(REVEAL_ATTR);
        element.classList.remove(REVEALED_CLASS);
        element.style.transitionDelay = '';
      });
    };
  }, []);

  return null;
}
