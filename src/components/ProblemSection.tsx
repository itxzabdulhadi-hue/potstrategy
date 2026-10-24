import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { RulerDiagram } from './RulerDiagram';
import { problem } from '../content/site';

export function ProblemSection() {
  return (
    <section className="section" id="the-problem" aria-labelledby="problem-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={problem.index}>{problem.label}</SectionLabel>
        </Tag>

        <div className="problem__grid">
          <div>
            <h2 className="display h2" id="problem-title">
              <Tag as="span" className="block">
                {problem.headline[0]}
              </Tag>{' '}
              <Tag as="span" className="accent block">
                {problem.headline[1]}
              </Tag>
            </h2>

            <Tag className="problem__copy body-copy">
              <Tag as="p">{problem.paragraphs[0]}</Tag>
              <Tag as="p">
                And each network sets its own rules, so <span className="problem__accent">nothing is comparable</span>.
                Different windows, different timing, different match logic, and nobody deduplicates a sale two networks
                both claim.
              </Tag>
            </Tag>
          </div>

          <Tag as="aside" className="compare" aria-label="What each retailer reports">
            <dl>
              {problem.panel.rows.map((row) => (
                <div className="compare__row" key={row.label}>
                  <dt className="compare__key">{row.label}</dt>
                  <dd className="compare__val">{row.value}</dd>
                </div>
              ))}
              <div className="compare__row compare__row--ask">
                <dt className="compare__key">{problem.panel.ask.label}</dt>
                <dd className="compare__val">{problem.panel.ask.value}</dd>
              </div>
            </dl>
            <p className="compare__note">
              {problem.panel.note} <em>{problem.panel.noteAccent}</em>
            </p>
          </Tag>
        </div>

        <RulerDiagram />
      </div>
    </section>
  );
}
