import type { ElementType, ReactNode } from 'react';

type TagProps = {
  as?: ElementType;
  className?: string;
  id?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

/**
 * Renders a semantic element with a class name.
 *
 * Layout only — text reveals are handled once, globally, by `TextReveal`
 * (see `src/components/TextReveal.tsx`), so no component needs to opt in.
 */
export function Tag({ as: Component = 'div', children, ...rest }: TagProps) {
  return <Component {...rest}>{children}</Component>;
}
