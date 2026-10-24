import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { RulerDiagram } from './RulerDiagram';
import { problem } from '../content/site';

export function ProblemSection() {
  return (
    <section className="section" id="the-problem" aria-labelledby="problem-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={problem.index}>{problem.label}</SectionLabel>
        </Reveal>

        <div className="problem__grid">
          <div>
            <h2 className="display h2" id="problem-title">
              <Reveal as="span" delay={0.05} y={18} className="block">
                {problem.headline[0]}
              </Reveal>{' '}
              <Reveal as="span" delay={0.14} y={18} className="accent block">
                {problem.headline[1]}
              </Reveal>
            </h2>

            <RevealGroup className="problem__copy body-copy" stagger={0.1} amount={0.25}>
              <RevealItem as="p">{problem.paragraphs[0]}</RevealItem>
              <RevealItem as="p">
                And each network sets its own rules, so <span className="problem__accent">nothing is comparable</span>.
                Different windows, different timing, different match logic, and nobody deduplicates a sale two networks
                both claim.
              </RevealItem>
            </RevealGroup>
          </div>

          <Reveal as="aside" className="compare" delay={0.12} y={18} amount={0.2} aria-label="What each retailer reports">
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
          </Reveal>
        </div>

        <RulerDiagram />
      </div>
    </section>
  );
}
