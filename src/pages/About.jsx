import SectionIntro from "../components/SectionIntro";
import CTASection from "../components/CTASection";

import "./About.css";

const valueSections = [
  {
    title: "Our Philosophy",
    text: "We believe a home should feel composed before it feels impressive. Our work begins with proportion, light, privacy, and the quiet details that shape daily living.",
    image: "/img/about-architecture-detail.png",
  },
  {
    title: "Private Advisory",
    text: "Every search is handled with discretion and clarity. We help clients understand what matters, what can be overlooked, and what should be considered carefully before moving forward.",
    image: "/img/about-consultation.png",
  },
];

function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-hero-media">
          <img
            src="/img/about-studio.png"
            alt="Quiet luxury property studio interior"
          />
        </div>

        <div className="about-hero-overlay" aria-hidden="true"></div>

        <div className="container about-hero-content">
          <span className="eyebrow">About Valehouse</span>

          <h1>A boutique property studio for considered living.</h1>

          <p>
            We work with a quieter view of real estate — one shaped by
            architecture, location, material, and the way a home feels over time.
          </p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div>
            <span className="eyebrow">Our View</span>
            <h2>Less noise. More considered decisions.</h2>
          </div>

          <div className="about-intro-text">
            <p>
              Valehouse Estates was created for clients who value clarity over
              pressure. We focus on residences with lasting character, helping
              buyers and owners understand not just what a property offers, but
              why it continues to matter.
            </p>

            <p>
              Our role is not to overwhelm. It is to refine the search, protect
              the process, and guide every decision with a calm, design-led
              perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <SectionIntro
            eyebrow="What Guides Us"
            title="A quieter standard for property advisory."
            text="Every residence is considered through architecture, privacy, material quality, surrounding context, and the way each space supports everyday life."
          />

          <div className="about-values-grid">
            {valueSections.map((item, index) => (
              <article className="about-value-card" key={item.title}>
                <div className="about-value-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="about-value-content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section design-led-section">
        <div className="container design-led-grid">
          <div className="design-led-content">
            <span className="eyebrow">Design-Led Selection</span>

            <h2>We look for homes that hold their presence quietly.</h2>

            <p>
              A refined home is not defined by scale alone. It is found in the
              restraint of a room, the quality of light, the depth of materials,
              and the comfort of a plan that works without needing to announce
              itself.
            </p>
          </div>

          <div className="design-led-points">
            <article>
              <span>01</span>
              <h3>Architecture</h3>
              <p>
                Clear proportions, thoughtful layouts, and spaces that feel
                balanced from the first viewing.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Location</h3>
              <p>
                Neighbourhoods chosen for lifestyle value, access, privacy, and
                long-term relevance.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Material</h3>
              <p>
                Finishes and details that feel refined, durable, and appropriate
                to the character of the home.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        image="/img/cta-quiet-home.png"
        eyebrow="Private Enquiry"
        title="Start with a quieter conversation."
        text="Tell us what you are looking for and we will respond with a considered direction, not a crowded list."
        buttonText="Begin Privately"
        buttonLink="/contact"
      />
    </div>
  );
}

export default About;