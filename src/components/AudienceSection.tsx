import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { audience } from '../content/site';

export function AudienceSection() {
  return (
    <section className="section" id="who" aria-labelledby="audience-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={audience.index}>{audience.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 intro__head" id="audience-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {audience.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {audience.headline[1]}
          </Reveal>
        </h2>

        <RevealGroup className="audience__cards" stagger={0.1} amount={0.15}>
          {audience.cards.map((card) => (
            <RevealItem className="audience__card" key={card.label}>
              <p className="audience__label">{card.label}</p>
              <h3 className="audience__title">{card.title}</h3>
              <p className="audience__body">{card.body}</p>
              <p className="audience__foot audience__foot--spaced">{card.foot}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
