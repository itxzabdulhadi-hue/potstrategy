import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
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
        <Reveal as="div" y={10}>
          <SectionLabel index={metrics.index}>{metrics.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 intro__head" id="metrics-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {metrics.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {metrics.headline[1]}
          </Reveal>
        </h2>

        <Reveal as="p" className="intro__lede" delay={0.24}>
          {metrics.lede}
        </Reveal>

        <RevealGroup className="metrics__cards" stagger={0.1} amount={0.15}>
          {metrics.cards.map((card) => (
            <RevealItem className="metric" key={card.abbr}>
              <CheckMark />
              <p className="metric__abbr">{card.abbr}</p>
              <p className="metric__label">{card.label}</p>
              <p className="metric__body">{card.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="figure" className="benchmark" y={20} amount={0.12}>
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
        </Reveal>

        <Reveal as="p" className="benchmark__foot" delay={0.08}>
          {metrics.benchmark.note}
        </Reveal>

        <Reveal as="div" className="metrics__cta" delay={0.14} y={12}>
          <a className="btn btn--terra" href={metrics.benchmark.cta.href}>
            {metrics.benchmark.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
