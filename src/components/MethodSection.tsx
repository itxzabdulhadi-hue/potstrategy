import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { method } from '../content/site';

export function MethodSection() {
  return (
    <section className="method" id="how-it-works" aria-labelledby="method-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={method.index} ruled={false}>
            {method.label}
          </SectionLabel>
        </Tag>

        <h2 className="display method__headline" id="method-title">
          <Tag as="span" className="block">
            {method.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {method.headline[1]}
          </Tag>
        </h2>

        <Tag className="method__steps" as="ol">
          {method.steps.map((step) => (
            <Tag as="li" className="step" key={step.n}>
              <span className="step__marker">{step.n}</span>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
            </Tag>
          ))}
        </Tag>
      </div>
    </section>
  );
}
