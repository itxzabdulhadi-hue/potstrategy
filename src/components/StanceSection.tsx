import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { stance } from '../content/site';

function StancePanel({
  panel,
  tone,
}: {
  panel: { label: string; items: readonly string[] };
  tone: 'dark' | 'light';
}) {
  return (
    <div className={`stance__panel${tone === 'dark' ? ' stance__panel--dark' : ''}`}>
      <p className="stance__label">{panel.label}</p>
      <RevealGroup as="ul" className="stance__list" stagger={0.08} amount={0.2}>
        {panel.items.map((item) => (
          <RevealItem as="li" className="stance__item" key={item}>
            <span className="stance__icon" aria-hidden="true">
              {tone === 'dark' ? '✓' : '✕'}
            </span>
            <span>{item}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

export function StanceSection() {
  return (
    <section className="section" id="where-we-stand" aria-labelledby="stance-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={stance.index}>{stance.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 intro__head" id="stance-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {stance.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {stance.headline[1]}
          </Reveal>
        </h2>

        <div className="stance__grid">
          <Reveal y={20} amount={0.12}>
            <StancePanel panel={stance.do} tone="dark" />
          </Reveal>
          <Reveal y={20} amount={0.12} delay={0.08}>
            <StancePanel panel={stance.dont} tone="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
