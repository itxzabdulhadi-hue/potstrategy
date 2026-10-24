import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { metrics } from '../content/site';

function CheckMark() {
  return (
    <svg
      className="metric__check"
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 5.6 5.2 9.8 14 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function MetricsSection() {
  return (
    <section className="section" id="metrics" aria-labelledby="metrics-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={metrics.index}>{metrics.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 intro__head" id="metrics-title">
          <Tag as="span" className="block">
            {metrics.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {metrics.headline[1]}
          </Tag>
        </h2>

        <Tag as="p" className="intro__lede">
          {metrics.lede}
        </Tag>

        <Tag className="metrics__cards">
          {metrics.cards.map((card) => (
            <Tag className="metric" key={card.abbr}>
              <CheckMark />
              <p className="metric__abbr">{card.abbr}</p>
              <p className="metric__label">{card.label}</p>
              <p className="metric__body">{card.body}</p>
            </Tag>
          ))}
        </Tag>

        <Tag as="figure" className="benchmark">
          <figcaption className="benchmark__caption">{metrics.benchmark.caption}</figcaption>
          <div className="benchmark__head" role="row">
            <span>{metrics.benchmark.title}</span>
            {metrics.benchmark.columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {metrics.benchmark.rows.map((row) => (
            <div className="benchmark__row" key={row.label}>
              <span className="benchmark__cell-label">{row.label}</span>
              <span className="benchmark__bars" aria-hidden="true">
                <span className="benchmark__bar" style={{ width: '38%' }} />
                <span className="benchmark__bar" style={{ width: '30%' }} />
              </span>
              <span className="benchmark__bars" aria-hidden="true">
                <span className="benchmark__bar" style={{ width: '46%' }} />
              </span>
              <span className="benchmark__read">{row.read}</span>
            </div>
          ))}
          <span className="benchmark__stamp" aria-hidden="true">
            {metrics.benchmark.stamp}
          </span>
        </Tag>

        <Tag as="p" className="benchmark__foot">
          {metrics.benchmark.note}
        </Tag>

        <Tag as="div" className="metrics__cta">
          <a className="btn btn--terra" href={metrics.benchmark.cta.href}>
            {metrics.benchmark.cta.label}
          </a>
        </Tag>
      </div>
    </section>
  );
}
