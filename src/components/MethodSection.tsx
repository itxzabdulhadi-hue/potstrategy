import { Reveal, RevealGroup, RevealItem } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { method } from '../content/site';

export function MethodSection() {
  return (
    <section className="method" id="how-it-works" aria-labelledby="method-title">
      <div className="container">
        <Reveal as="div" y={10}>
          <SectionLabel index={method.index} ruled={false}>
            {method.label}
          </SectionLabel>
        </Reveal>

        <h2 className="display method__headline" id="method-title">
          <Reveal as="span" className="block" delay={0.05} y={18}>
            {method.headline[0]}
          </Reveal>{' '}
          <Reveal as="span" className="accent block" delay={0.15} y={18}>
            {method.headline[1]}
          </Reveal>
        </h2>

        <RevealGroup className="method__steps" as="ol" stagger={0.14} amount={0.1}>
          {method.steps.map((step) => (
            <RevealItem as="li" className="step" key={step.n}>
              <span className="step__marker">{step.n}</span>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
