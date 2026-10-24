import { Tag } from './Tag';
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
      <Tag as="ul" className="stance__list">
        {panel.items.map((item) => (
          <Tag as="li" className="stance__item" key={item}>
            <span className="stance__icon" aria-hidden="true">
              {tone === 'dark' ? '✓' : '✕'}
            </span>
            <span>{item}</span>
          </Tag>
        ))}
      </Tag>
    </div>
  );
}

export function StanceSection() {
  return (
    <section className="section" id="where-we-stand" aria-labelledby="stance-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={stance.index}>{stance.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 intro__head" id="stance-title">
          <Tag as="span" className="block">
            {stance.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {stance.headline[1]}
          </Tag>
        </h2>

        <div className="stance__grid">
          <Tag>
            <StancePanel panel={stance.do} tone="dark" />
          </Tag>
          <Tag>
            <StancePanel panel={stance.dont} tone="light" />
          </Tag>
        </div>
      </div>
    </section>
  );
}
