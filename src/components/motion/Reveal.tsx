import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

type Tag =
  | 'div'
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'li'
  | 'ul'
  | 'figure'
  | 'figcaption'
  | 'section'
  | 'blockquote'
  | 'aside'
  | 'ol';

const TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  li: motion.li,
  ul: motion.ul,
  figure: motion.figure,
  figcaption: motion.figcaption,
  section: motion.section,
  blockquote: motion.blockquote,
  aside: motion.aside,
  ol: motion.ol,
} as const;

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** seconds */
  delay?: number;
  /** seconds */
  duration?: number;
  /** pixels of upward travel */
  y?: number;
  amount?: number;
  id?: string;
};

/**
 * A single text group that fades up once as it enters the viewport.
 * Falls back to fully visible content when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  duration = 0.7,
  y = 16,
  amount = 0.25,
  id,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = TAGS[as];

  if (reduced) {
    const Plain = as as 'div';
    return (
      <Plain id={id} className={className}>
        {children}
      </Plain>
    );
  }

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}

/**
 * A parent that reveals its children in a small, ordered stagger.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  amount = 0.2,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: Tag;
}) {
  const reduced = useReducedMotion();
  const Component = TAGS[as];

  if (reduced) {
    const Plain = as as 'div';
    return <Plain className={className}>{children}</Plain>;
  }

  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </Component>
  );
}

/**
 * A child of RevealGroup. Keep it on the immediate child element.
 */
export function RevealItem({
  children,
  className,
  as = 'div',
  y = 14,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  y?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const Component = TAGS[as];

  if (reduced) {
    const Plain = as as 'div';
    return <Plain className={className}>{children}</Plain>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration, ease: EASE_OUT } },
  };

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
