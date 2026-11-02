import { Tag } from './Tag';
import { SectionLabel } from './SectionLabel';
import { start } from '../content/site';

export function StartSection() {
  return (
    <section className="container start" id="start" aria-labelledby="start-title">
      <Tag as="div">
        <SectionLabel index={start.index}>{start.label}</SectionLabel>
      </Tag>

      <div className="start__inner">
        <h2 className="display start__title" id="start-title">
          <Tag as="span">
            {start.headline}
          </Tag>
        </h2>
        <Tag as="p" className="start__body">
          {start.body}
        </Tag>
        <Tag as="div" className="start__actions">
          <a className="btn btn--terra" href={start.actions[0].href}>
            {start.actions[0].label}
          </a>
          <a className="btn btn--ghost" href={start.actions[1].href}>
            {start.actions[1].label}
          </a>
        </Tag>
      </div>
    </section>
  );
}
