import { Reveal } from './motion/Reveal';
import { footer } from '../content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal y={12} duration={0.6} amount={0.15}>
          <div className="footer__top">
            <div className="footer__brand">
              <img
                className="footer__mark"
                src="/brand/pot-strategy-mark-inverse.png"
                alt=""
                aria-hidden="true"
                width={246}
                height={287}
              />
              <div>
                <p className="footer__name">{footer.brand}</p>
                <p className="footer__tagline">{footer.tagline}</p>
              </div>
            </div>

            <nav className="footer__nav" aria-label="Footer">
              {footer.links.map((link) => (
                <a className="footer__link" href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <hr className="footer__rule" />

          <div className="footer__bottom">
            <p>{footer.copyright}</p>
            <p className="footer__legal">
              <span>{footer.popia}</span>
              <a href={footer.privacy.href} target="_blank" rel="noreferrer noopener">
                {footer.privacy.label}
              </a>
              <span aria-hidden="true">·</span>
              <a href={footer.contact.href}>{footer.contact.label}</a>
            </p>
            <a className="footer__email" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
