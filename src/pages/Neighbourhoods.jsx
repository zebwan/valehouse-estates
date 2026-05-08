import SectionIntro from "../components/SectionIntro";
import CTASection from "../components/CTASection";

import "./Neighbourhoods.css";

const neighbourhoodSections = [
  {
    label: "01",
    title: "City Living",
    text: "For those who value access without giving up calm. Our city residences are selected around culture, dining, business districts, private amenities, and neighbourhoods that hold long-term relevance.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-city.png",
    points: ["Cultural access", "Private amenities", "Walkable convenience"],
  },
  {
    label: "02",
    title: "Coastal Calm",
    text: "Homes shaped by light, openness, and slower rituals. Coastal addresses offer a softer pace, with residences chosen for privacy, atmosphere, and a stronger connection to the surrounding landscape.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-coastal.png",
    points: ["Open views", "Slower daily rhythm", "Natural light"],
  },
  {
    label: "03",
    title: "Hillside Privacy",
    text: "Elevated homes with a deeper sense of retreat. Hillside residences are chosen for privacy, greenery, architectural presence, and the quiet separation they offer from the pace below.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-hillside.png",
    points: ["Elevated setting", "Stronger privacy", "Green surroundings"],
  },
];

function Neighbourhoods() {
  return (
    <div className="page neighbourhoods-page">
      <section className="neighbourhoods-hero">
        <div className="container neighbourhoods-hero-grid">
          <div>
            <span className="eyebrow">Neighbourhoods</span>
            <h1>Locations with lasting character.</h1>
          </div>

          <p>
            We focus on neighbourhoods with strong lifestyle value,
            architectural quality, and long-term appeal.
          </p>
        </div>
      </section>

      <section className="section neighbourhoods-intro">
        <div className="container">
          <SectionIntro
            eyebrow="How We Choose"
            title="A home is shaped by more than its walls."
            text="The right location should support privacy, movement, daily rhythm, and the way a residence continues to feel over time."
            align="center"
          />

          <div className="neighbourhood-principles">
            <article>
              <span>01</span>
              <h3>Lifestyle Value</h3>
              <p>
                We consider how each neighbourhood supports everyday living,
                from dining and wellness to privacy and pace.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Architectural Quality</h3>
              <p>
                We look for locations where the surrounding built environment
                feels intentional, balanced, and enduring.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Long-Term Appeal</h3>
              <p>
                We focus on areas with lasting relevance, not short-lived
                attention or passing development trends.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="neighbourhoods-showcase">
        {neighbourhoodSections.map((item) => (
          <article className="neighbourhood-showcase-item" key={item.title}>
            <div className="neighbourhood-showcase-image">
              <img src={item.image} alt={`${item.title} neighbourhood`} />
            </div>

            <div className="neighbourhood-showcase-content">
              <span className="neighbourhood-showcase-number">
                {item.label}
              </span>

              <h2>{item.title}</h2>

              <p>{item.text}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <CTASection
        image="/valehouse-estates/valehouse-estates/img/cta-quiet-home.png"
        eyebrow="Private Search"
        title="Find the setting that fits the way you live."
        text="Tell us the kind of place you are drawn to and we will help refine the search with care."
        buttonText="Start a Private Enquiry"
        buttonLink="/contact"
      />
    </div>
  );
}

export default Neighbourhoods;