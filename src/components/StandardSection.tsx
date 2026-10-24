import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { standard } from '../content/site';

export function StandardSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className="section" id="the-standard" aria-labelledby="standard-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={standard.index}>{standard.label}</SectionLabel>
        </Reveal>

        <h2 className="display h2 standard__head" id="standard-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {standard.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {standard.headline[1]}
          </Reveal>
        </h2>

        <Reveal as="p" className="intro__lede" delay={0.22}>
          {standard.lede}
        </Reveal>

        <RevealGroup as="ol" className="standard__rules" stagger={0.09} amount={0.12}>
          {standard.rules.map((rule) => (
            <RevealItem as="li" className="standard__rule" key={rule.n}>
              <p className="standard__rule-n">{rule.n}</p>
              <h3 className="standard__rule-title">{rule.title}</h3>
              <p className="standard__rule-body">{rule.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="p" className="standard__global" delay={0.08}>
          <strong>{standard.global.strong}</strong> {standard.global.body}{' '}
          <a className="arrow-link" href={standard.global.link.href} target="_blank" rel="noreferrer noopener">
            {standard.global.link.label} <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        {children}
      </div>
    </section>
  );
}
