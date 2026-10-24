import { Reveal } from './motion/Reveal';
import { SectionLabel } from './SectionLabel';
import { start } from '../content/site';

export function StartSection() {
  return (
    <section className="container start" id="start" aria-labelledby="start-title">
      <Reveal as="div" y={10}>
        <SectionLabel index={start.index}>{start.label}</SectionLabel>
      </Reveal>

      <div className="start__inner">
        <h2 className="display start__title" id="start-title">
          <Reveal as="span" delay={0.06} y={18}>
            {start.headline}
          </Reveal>
        </h2>
        <Reveal as="p" className="start__body" delay={0.15}>
          {start.body}
        </Reveal>
        <Reveal as="div" className="start__actions" delay={0.22} y={12}>
          <a className="btn btn--terra" href={start.actions[0].href}>
            {start.actions[0].label}
          </a>
          <a className="btn btn--ghost" href={start.actions[1].href}>
            {start.actions[1].label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
