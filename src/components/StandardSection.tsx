import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { standard } from '../content/site';

export function StandardSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className="section" id="the-standard" aria-labelledby="standard-title">
      <div className="container">
        <Tag as="div">
          <SectionLabel index={standard.index}>{standard.label}</SectionLabel>
        </Tag>

        <h2 className="display h2 standard__head" id="standard-title">
          <Tag as="span" className="block">
            {standard.headline[0]}
          </Tag>{' '}
          <Tag as="span" className="accent block">
            {standard.headline[1]}
          </Tag>
        </h2>

        <Tag as="p" className="intro__lede">
          {standard.lede}
        </Tag>

        <Tag as="ol" className="standard__rules">
          {standard.rules.map((rule) => (
            <Tag as="li" className="standard__rule" key={rule.n}>
              <p className="standard__rule-n">{rule.n}</p>
              <h3 className="standard__rule-title">{rule.title}</h3>
              <p className="standard__rule-body">{rule.body}</p>
            </Tag>
          ))}
        </Tag>

        <Tag as="p" className="standard__global">
          <strong>{standard.global.strong}</strong> {standard.global.body}{' '}
          <a className="arrow-link" href={standard.global.link.href} target="_blank" rel="noreferrer noopener">
            {standard.global.link.label} <span aria-hidden="true">→</span>
          </a>
        </Tag>

        {children}
      </div>
    </section>
  );
}
