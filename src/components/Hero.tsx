import { motion, useReducedMotion } from 'motion/react';
import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { hero } from '../content/site';

/** Restrained analytical marks that orbit the brand mark — the logo itself never moves. */
function MarkInstruments() {
  const reduced = useReducedMotion();
  const nodes = [
    { cx: 57, cy: 7, delay: 0 },
    { cx: 91, cy: 47, delay: 1.4 },
    { cx: 18, cy: 82, delay: 2.8 },
  ];

  return (
    <svg className="hero__mark-rings" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="46.5" strokeDasharray="0.6 7" />
      {nodes.map((node) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r="0.9"
          fill="var(--terra)"
          stroke="none"
          animate={reduced ? { opacity: 0.5 } : { opacity: [0.16, 0.8, 0.16] }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 7, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }
          }
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <motion.span
              className="crosshair"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <span className="crosshair__dot" />
            </motion.span>

            <Reveal as="p" className="hero__eyebrow" delay={0.04} duration={0.55} y={8}>
              {hero.eyebrow}
            </Reveal>

            <h1 className="display hero__title" id="hero-title">
              <Reveal as="span" delay={0.12} y={16}>
                {hero.headline[0]}
              </Reveal>
              <Reveal as="span" className="accent" delay={0.22} y={16}>
                {hero.headline[1]}
              </Reveal>
            </h1>

            <Reveal as="p" className="hero__lede" delay={0.32}>
              {hero.lede[0]}
              <br />
              {hero.lede[1]}
            </Reveal>

            <Reveal as="p" className="hero__body" delay={0.4}>
              {hero.body}
            </Reveal>
          </div>

          <div className="hero__mark">
            <MarkInstruments />
            <motion.div
              className="hero__mark-inner"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1], delay: 0.16 }}
            >
              <img
                src="/brand/pot-strategy-hero-mark.png"
                alt="Pot Strategy head and puzzle mark"
                width={429}
                height={501}
              />
            </motion.div>
          </div>
        </div>

        <Reveal as="div" className="hero__divider" delay={0.1} y={0}>
          <hr className="rule" />
        </Reveal>

        <RevealGroup className="hero__facts" as="ul" stagger={0.09} amount={0.4}>
          {hero.facts.map((fact) => (
            <RevealItem key={fact.title} as="li">
              <h2 className="hero__fact-title">{fact.title}</h2>
              <p className="hero__fact-body">{fact.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="p" className="hero__tagline" delay={0.1}>
          {hero.tagline}
        </Reveal>
      </div>
    </section>
  );
}
