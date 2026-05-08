import "./SectionIntro.css";

function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export default SectionIntro;