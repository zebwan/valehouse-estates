import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";

const navLinks = [
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

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const headerClasses = [
    "site-header",
    isScrolled || !isHomePage ? "site-header-scrolled" : "",
    isMenuOpen ? "site-header-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="Valehouse Estates home">
          <span>Valehouse</span>
          <small>Estates</small>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="header-enquiry">
          Private Enquiry
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="mobile-menu">
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <p>Private homes. Considered living.</p>
          <Link to="/contact" className="btn btn-primary">
            Speak to Advisor
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;