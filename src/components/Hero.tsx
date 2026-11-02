import { motion, useReducedMotion } from 'motion/react';
import { Tag } from './Tag';
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

            <Tag as="p" className="hero__eyebrow">
              {hero.eyebrow}
            </Tag>

            <h1 className="display hero__title" id="hero-title">
              <Tag as="span">
                {hero.headline[0]}
              </Tag>
              <Tag as="span" className="accent">
                {hero.headline[1]}
              </Tag>
            </h1>

            <Tag as="p" className="hero__lede">
              {hero.lede[0]}
              <br />
              {hero.lede[1]}
            </Tag>

            <Tag as="p" className="hero__body">
              {hero.body}
            </Tag>
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

        <Tag as="div" className="hero__divider">
          <hr className="rule" />
        </Tag>

        <Tag className="hero__facts" as="ul">
          {hero.facts.map((fact) => (
            <Tag key={fact.title} as="li">
              <h2 className="hero__fact-title">{fact.title}</h2>
              <p className="hero__fact-body">{fact.body}</p>
            </Tag>
          ))}
        </Tag>

        <Tag as="p" className="hero__tagline">
          {hero.tagline}
        </Tag>
      </div>
    </section>
  );
}
