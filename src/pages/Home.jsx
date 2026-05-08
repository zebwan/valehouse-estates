import { Link } from "react-router-dom";

import PropertyCard from "../components/PropertyCard";
import SectionIntro from "../components/SectionIntro";
import CTASection from "../components/CTASection";

import { properties } from "../data/properties";

import "./Home.css";

const approachItems = [
  {
    number: "01",
    title: "Curated homes",
    text: "We select residences with architectural clarity, lasting materials, and a calm sense of proportion.",
  },
  {
    number: "02",
    title: "Private advisory",
    text: "Each search is handled quietly, with clear guidance from first conversation to final consideration.",
  },
  {
    number: "03",
    title: "Design-led view",
    text: "We look beyond location and price, considering how a home feels, functions, and holds value over time.",
  },
];

const interiorHighlights = [
  {
    title: "Living Room",
    image: "/valehouse-estates/valehouse-estates/img/interior-living-room.png",
  },
  {
    title: "Kitchen",
    image: "/valehouse-estates/valehouse-estates/img/interior-kitchen.png",
  },
  {
    title: "Bedroom",
    image: "/valehouse-estates/valehouse-estates/img/interior-bedroom.png",
  },
  {
    title: "Bathroom",
    image: "/valehouse-estates/valehouse-estates/img/interior-bathroom.png",
  },
];

const neighbourhoods = [
  {
    title: "City",
    text: "Refined residences close to culture, dining, work, and private amenities.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-city.png",
  },
  {
    title: "Coast",
    text: "Quiet addresses shaped by light, openness, and slower everyday rituals.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-coastal.png",
  },
  {
    title: "Hillside",
    text: "Private homes surrounded by elevation, greenery, and a deeper sense of retreat.",
    image: "/valehouse-estates/valehouse-estates/img/neighbourhood-hillside.png",
  },
];

function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="page home-page">
      <section className="home-hero">
        <picture className="home-hero-media">
          <source
            srcSet="/valehouse-estates/valehouse-estates/img/hero-residence-mobile.png"
            media="(max-width: 768px)"
          />
          <img
            src="/valehouse-estates/valehouse-estates/img/hero-residence.png"
            alt="Minimal luxury residence surrounded by warm natural light"
          />
        </picture>

        <div className="home-hero-overlay" aria-hidden="true"></div>

        <div className="container home-hero-content">
          <span className="home-hero-kicker">Valehouse Estates</span>

          <h1>
            Private homes.
            <br />
            Considered living.
          </h1>

          <p>
            A boutique real estate studio curating refined residences for quiet,
            modern living.
          </p>

          <div className="home-hero-actions">
            <Link to="/residences" className="btn btn-light">
              View Residences
            </Link>

            <Link to="/contact" className="btn btn-outline-light">
              Speak to Advisor
            </Link>
          </div>
        </div>
      </section>

      <section className="section selected-residences">
        <div className="container">
          <div className="home-section-heading">
            <SectionIntro
              eyebrow="Selected Residences"
              title="Homes with quiet presence."
              text="A considered selection of private residences shaped by architecture, atmosphere, and enduring location value."
            />

            <Link to="/residences" className="btn btn-secondary">
              View All Residences
            </Link>
          </div>

          <div className="selected-residences-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-image">
            <img
              src="/valehouse-estates/valehouse-estates/img/about-studio.png"
              alt="Editorial interior of a refined real estate studio"
            />
          </div>

          <div className="about-preview-content">
            <span className="eyebrow">Our Studio</span>

            <h2>A quieter way to find home.</h2>

            <p>
              Valehouse Estates works with buyers, owners, and developers who
              value discretion, clarity, and considered design. We focus on homes
              with strong architectural character, refined spaces, and locations
              that continue to hold meaning over time.
            </p>

            <Link to="/about" className="btn btn-primary">
              About Valehouse
            </Link>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionIntro
            eyebrow="Our Approach"
            title="Clear advice. Fewer distractions."
            text="Our process is intentionally focused, helping every client move with confidence instead of noise."
          />

          <div className="approach-grid">
            {approachItems.map((item) => (
              <article className="approach-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section interior-section">
        <div className="container">
          <SectionIntro
            eyebrow="Interior Highlights"
            title="Spaces that feel composed, not decorated."
            text="From calm living rooms to quiet bedrooms, each residence is selected with attention to proportion, texture, and light."
          />

          <div className="interior-grid">
            {interiorHighlights.map((item) => (
              <article className="interior-card" key={item.title}>
                <div className="interior-card-image">
                  <img src={item.image} alt={`${item.title} interior`} />
                </div>

                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section neighbourhood-preview">
        <div className="container">
          <SectionIntro
            eyebrow="Neighbourhoods"
            title="Locations with lasting character."
            text="We focus on places with strong lifestyle value, architectural quality, and long-term appeal."
          />

          <div className="neighbourhood-preview-grid">
            {neighbourhoods.map((item) => (
              <article className="neighbourhood-card" key={item.title}>
                <div className="neighbourhood-card-image">
                  <img src={item.image} alt={`${item.title} neighbourhood`} />
                </div>

                <div className="neighbourhood-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="neighbourhood-preview-action">
            <Link to="/neighbourhoods" className="btn btn-primary">
              Explore Neighbourhoods
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        image="/valehouse-estates/valehouse-estates/img/cta-quiet-home.png"
        title="Let us help you find a quieter kind of home."
        text="Share what you are looking for and we will respond with a considered selection shaped around your priorities."
        buttonText="Start a Private Enquiry"
        buttonLink="/contact"
      />
    </div>
  );
}

export default Home;