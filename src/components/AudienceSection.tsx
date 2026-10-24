import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { audience } from '../content/site';

export function AudienceSection() {
  return (
    <section className="section" id="who" aria-labelledby="audience-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={audience.index}>{audience.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 intro__head" id="audience-title">
          <Tag as="span" className="block">
            {audience.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {audience.headline[1]}
          </Tag>
        </h2>

        <Tag className="audience__cards">
          {audience.cards.map((card) => (
            <Tag className="audience__card" key={card.label}>
              <p className="audience__label">{card.label}</p>
              <h3 className="audience__title">{card.title}</h3>
              <p className="audience__body">{card.body}</p>
              <p className="audience__foot audience__foot--spaced">{card.foot}</p>
            </Tag>
          ))}
        </Tag>
      </div>
    </section>
  );
}
