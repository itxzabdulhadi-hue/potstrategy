import { marquee } from '../content/site';

function Group() {
  return (
    <div className="marquee__group" aria-hidden="false">
      {marquee.map((item) => (
        <p className="marquee__item" key={item.text}>
          {item.text}
          <em>{item.accent}</em>
        </p>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        <Group />
        <div className="marquee__group" aria-hidden="true">
          {marquee.map((item) => (
            <p className="marquee__item" key={`${item.text}-clone`}>
              {item.text}
              <em>{item.accent}</em>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
