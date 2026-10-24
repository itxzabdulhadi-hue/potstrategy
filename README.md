# Pot Strategy — website

A rebuild of the Pot Strategy marketing site: an editorial, single-page site for an
independent retail-media measurement company in Johannesburg, South Africa.

The reference screenshot is the visual specification. Layout, section order, palette,
typography scale and panel/diagram construction follow it; the only additions are the
scroll-reveal animation system and the working interactions needed to make it a real site.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Motion for React** (`motion`) for the FAQ and mobile-menu transitions; the global text
  reveal is a small IntersectionObserver-based module (no animation library)
- **Fontsource** self-hosted fonts — no external font CDN
  - Display / headlines: **Playfair Display** (400, 500)
  - Serif subheads, card titles, quotes: **Newsreader** (variable, roman + italic)
  - Body, labels, UI: **Inter** (variable)

## Design tokens

All three brand colours are declared once in `src/styles/global.css`:

| Token     | Value     | Use                                                        |
| --------- | --------- | ---------------------------------------------------------- |
| `--cream` | `#f6f2e9` | page background, light sections, light panels              |
| `--ink`   | `#1f1d19` | text, dark sections, dark cards, footer, CTA buttons       |
| `--terra` | `#a65e3c` | accent words, labels, chart marks, tags, accents           |

Derived tints (`--tint`, `--tint-soft`) and rules (`--line`, `--line-cream`) are blends of
those three colours only. No unrelated hues are introduced anywhere in the build.

## Structure

```
src/
  App.tsx                  page composition (section order mirrors the reference)
  content/site.ts          every piece of copy in one file
  styles/global.css        tokens, layout, all section styling
  components/
    Header.tsx             sticky nav, mobile menu (Esc to close, links close it)
    Hero.tsx               split hero, circular brand composition + subtle node marks
    ProblemSection.tsx     01 — the problem, retailer comparison panel
    RulerDiagram.tsx       the "one scale" ruler diagram (ticks, positions, labels)
    ProofSection.tsx       02 — who marks the result (three cards, one dark)
    MetricsSection.tsx     03 — iROAS / ISS / ISS-A + benchmark scorecard
    VerdictSection.tsx     04 — decision scorecard
    AudienceSection.tsx    05 — brands, agencies, retail media networks
    MethodSection.tsx      06 — dark four-step methodology section
    StanceSection.tsx      07 — what we do / what we deliberately don't
    Marquee.tsx            italic brand statements band
    StandardSection.tsx    08 — four rules + global standards note
    FaqSection.tsx         FAQ accordion (rendered inside section 08)
    StartSection.tsx       09 — closing CTA and quiet negative space
    Footer.tsx             dark footer
    TextReveal.tsx         global scroll-triggered text reveal engine (one observer)
    Tag.tsx                semantic element passthrough used for layout wrappers
    SectionLabel.tsx       numbered uppercase section label with rule
```

## Animation

There is one animation system for text, and it lives in `src/components/TextReveal.tsx`.
`<TextReveal />` is mounted once in `App.tsx`; no component opts in individually.

- **Discovery** — on mount it walks the document for elements that directly own text and
  marks them `data-reveal`. Inline children of a paragraph are skipped so a paragraph never
  fades twice, and screen-reader-only or `aria-hidden` text is ignored. Section headings
  built from stacked `<span>`s therefore reveal line by line. `data-reveal-skip` opts a
  subtree out (used by the infinite marquee, whose duplicated copy must not fade apart).
- **Trigger** — a single `IntersectionObserver` with `threshold: 0.15`, no `rootMargin`.
  An element reveals the first time ~15% of it is visible, then is unobserved, so nothing
  fades a second time or re-hides on scroll-up.
- **Motion** — `opacity 0 → 1` and `translateY(16px) → 0`, 600ms, `ease-out`
  (`cubic-bezier(.22,.61,.36,1)`), defined once in `global.css` under `.text-reveal`.
- **Order** — elements of a section that arrive in the same wave are revealed 100ms apart in
  reading order, capped at 600ms so a long list never waits.
- **Later content** — a `MutationObserver` registers nodes mounted after first paint (mobile
  menu, opened FAQ answers) into the same observer, so they reveal on entry too.
- **Safety** — the hiding class is added by JS only (`<html class="text-reveal">`), so a
  script failure leaves every word visible; `prefers-reduced-motion: reduce` skips the
  system entirely (content is simply visible); a 2.5s fallback pass reveals anything already
  on screen if an observer callback is ever missed. Only `opacity` and `transform` animate,
  so there is no layout shift, and links, text selection and keyboard focus are untouched.

The logo never animates. Inside the hero circle, only faint terracotta data nodes and a
dashed ring suggest analytical processing. The FAQ panel animates height only, and the
marquee is neutralised under reduced motion.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Content notes

All copy is taken from Pot Strategy's own published material (site copy and POPIA privacy
notice). Links point at real destinations: `mailto:hello@potstrategy.com` for contact and
session bookings, the live privacy notice, and the published insights article on global
retail-media measurement standards.

Two items in the reference screenshot rendered blank in the supplied capture; the copy for
them was recovered from Pot Strategy's published site rather than invented:

- **Section 07** body items ("What we do" bullet list and "What we deliberately don't" list).
- **Section 08** ledger content: the section lede, the four rules, the global-standards
  paragraph, and the six FAQ question/answer pairs.

Nothing else was added: there are no invented client names, benchmarks, statistics or
service commitments anywhere on the page. Areas the reference deliberately leaves quiet
(section 09) are kept quiet.

### Worth confirming with the client

- The FAQ in the reference appears immediately after the standard rules with no visible
  heading. It is rendered here inside section 08 with no heading, matching the capture.
- The desktop nav lists seven items; "Insights" points to the live insights article and
  "Contact" is a mailto, as no other pages exist in this build.
