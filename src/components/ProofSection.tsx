import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { proof } from '../content/site';

export function ProofSection() {
  return (
    <section className="section" id="the-proof" aria-labelledby="proof-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={proof.index}>{proof.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 proof__headline" id="proof-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {proof.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.16} y={18}>
            {proof.headline[1]}
          </Reveal>
        </h2>

        <Reveal as="p" className="proof__body body-copy" delay={0.24}>
          {proof.body}
        </Reveal>

        <RevealGroup className="proof__cards" stagger={0.1} amount={0.15}>
          {proof.cards.map((card) => (
            <RevealItem
              key={card.title}
              className={`proof__card${card.tone === 'dark' ? ' proof__card--dark' : ''}`}
            >
              <p className="proof__card-label">{card.label}</p>
              <h3 className="proof__card-title">{card.title}</h3>
              <p className="proof__card-body">{card.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="p" className="proof__note" delay={0.1}>
          <strong>{proof.footnote.strong}</strong> {proof.footnote.rest}
        </Reveal>
      </div>
    </section>
  );
}
