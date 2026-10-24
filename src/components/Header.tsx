import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { nav } from '../content/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 940) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Pot Strategy — home">
          <img
            className="brand__img"
            src="/brand/pot-strategy-logo.png"
            alt="Pot Strategy"
            width={720}
            height={289}
          />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) =>
            'external' in item && item.external ? (
              <a
                key={item.label}
                className="header__link"
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.label}
              </a>
            ) : (
              <a key={item.label} className="header__link" href={item.href}>
                {item.label}
              </a>
            ),
          )}
          <a className="btn header__cta" href="#start">
            Start a pilot
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="header__mobile"
            initial={reduced ? false : { y: -10 }}
            animate={{ y: 0 }}
            exit={reduced ? {} : { y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <nav className="container header__mobile-inner" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.label}
                  className="header__mobile-link"
                  href={item.href}
                  {...('external' in item && item.external
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a className="btn header__mobile-cta" href="#start" onClick={() => setOpen(false)}>
                Start a pilot
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
