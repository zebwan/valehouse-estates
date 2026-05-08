import { Link } from "react-router-dom";
import "./Footer.css";

const footerLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Residences",
    path: "/residences",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Neighbourhoods",
    path: "/neighbourhoods",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>Valehouse</span>
              <small>Estates</small>
            </Link>

            <p>
              A boutique real estate studio curating refined residences for
              quiet, modern living.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact">
              <a href="mailto:hello@valehouseestates.com">
                hello@valehouseestates.com
              </a>
              <a href="tel:+60300000000">+603 0000 0000</a>
              <p>Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Valehouse Estates. All rights reserved.</p>
          <p>Private homes. Considered living.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;