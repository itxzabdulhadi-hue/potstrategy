import { Reveal } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { verdict } from '../content/site';

export function VerdictSection() {
  return (
    <section className="section" id="decisions" aria-labelledby="verdict-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={verdict.index}>{verdict.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 intro__head" id="verdict-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {verdict.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {verdict.headline[1]}
          </Reveal>
        </h2>

        <Reveal as="p" className="intro__lede" delay={0.24}>
          {verdict.lede}
        </Reveal>

        <Reveal as="figure" className="scorecard" y={20} amount={0.12}>
          <div className="scorecard__head">
            <span>{verdict.scorecard.title}</span>
            <span className="scorecard__badge">{verdict.scorecard.badge}</span>
          </div>

          {verdict.scorecard.rows.map((row) => (
            <div className="scorecard__row" key={row.retailer}>
              <div className="scorecard__retailer">
                {row.retailer}
                <div className="scorecard__product">{row.product}</div>
              </div>
              <div>
                <div className="scorecard__verdict">
                  <span className="tag">{row.tag}</span>
                  <h3 className="scorecard__action">{row.action}</h3>
                </div>
                <p className="scorecard__body">{row.body}</p>
              </div>
            </div>
          ))}

          <p className="scorecard__note">{verdict.scorecard.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
