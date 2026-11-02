import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { verdict } from '../content/site';

export function VerdictSection() {
  return (
    <section className="section" id="decisions" aria-labelledby="verdict-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={verdict.index}>{verdict.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 intro__head" id="verdict-title">
          <Tag as="span" className="block">
            {verdict.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {verdict.headline[1]}
          </Tag>
        </h2>

        <Tag as="p" className="intro__lede">
          {verdict.lede}
        </Tag>

        <Tag as="figure" className="scorecard">
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
        </Tag>
      </div>
    </section>
  );
}
