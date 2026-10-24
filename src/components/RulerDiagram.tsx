import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { problem } from '../content/site';

const TICKS = 41;
const DOTS = [30, 55.5, 72];
const LABELS = [
  { text: '0', at: 0, align: 'start' as const },
  { text: 'baseline', at: 30, align: 'center' as const },
  { text: 'lift', at: 55.5, align: 'center' as const },
  { text: 'scale', at: 100, align: 'end' as const },
];

export function RulerDiagram() {
  return (
    <Reveal as="figure" className="ruler" amount={0.15} y={20}>
      <div className="ruler__cards">
        {problem.diagram.cards.map((card) => (
          <div className="ruler__card" key={card.value}>
            <p className="ruler__value">{card.value}</p>
            <p className="ruler__caption">{card.caption}</p>
          </div>
        ))}
      </div>

      <div className="ruler__track" role="img" aria-label="Three campaign positions restated on one common scale">
        <div className="ruler__scale" aria-hidden="true">
          {Array.from({ length: TICKS }, (_, i) => {
            const at = (i / (TICKS - 1)) * 100;
            const major = i % 5 === 0;
            return (
              <span
                key={i}
                className={`ruler__tick ${major ? 'ruler__tick--major' : 'ruler__tick--minor'}`}
                style={{ left: `${at}%` }}
              />
            );
          })}
          <span className="ruler__baseline" />
          {DOTS.map((at) => (
            <span key={at} className="ruler__dot" style={{ left: `${at}%` }} />
          ))}
        </div>

        <div className="ruler__labels" aria-hidden="true">
          {LABELS.map((label) => (
            <span key={label.text} style={{ left: `${label.at}%` }}>
              {label.text}
            </span>
          ))}
        </div>

        <p className="ruler__unit">{problem.diagram.unit}</p>
      </div>

      <RevealGroup as="figcaption" className="ruler__note" stagger={0.12} amount={0.6}>
        <RevealItem as="span">{problem.diagram.note} </RevealItem>
        <RevealItem as="span">
          <em>{problem.diagram.noteAccent}</em>
        </RevealItem>
      </RevealGroup>
    </Reveal>
  );
}
