import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { proof } from '../content/site';

export function ProofSection() {
  return (
    <section className="section" id="the-proof" aria-labelledby="proof-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={proof.index}>{proof.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 proof__headline" id="proof-title">
          <Tag as="span" className="block">
            {proof.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {proof.headline[1]}
          </Tag>
        </h2>

        <Tag as="p" className="proof__body body-copy">
          {proof.body}
        </Tag>

        <Tag className="proof__cards">
          {proof.cards.map((card) => (
            <Tag
              key={card.title}
              className={`proof__card${card.tone === 'dark' ? ' proof__card--dark' : ''}`}
            >
              <p className="proof__card-label">{card.label}</p>
              <h3 className="proof__card-title">{card.title}</h3>
              <p className="proof__card-body">{card.body}</p>
            </Tag>
          ))}
        </Tag>

        <Tag as="p" className="proof__note">
          <strong>{proof.footnote.strong}</strong> {proof.footnote.rest}
        </Tag>
      </div>
    </section>
  );
}
