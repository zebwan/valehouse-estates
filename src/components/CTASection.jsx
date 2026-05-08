import { Link } from "react-router-dom";
import "./CTASection.css";

function CTASection({
  eyebrow = "Private Enquiry",
  title,
  text,
  buttonText = "Start a Private Enquiry",
  buttonLink = "/contact",
  image,
}) {
  return (
    <section className="cta-section">
      {image && (
        <div className="cta-section-bg" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      )}

      <div className="cta-section-overlay" aria-hidden="true"></div>

      <div className="container">
        <div className="cta-section-content">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>

          {text && <p>{text}</p>}

          <Link to={buttonLink} className="btn btn-light">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;