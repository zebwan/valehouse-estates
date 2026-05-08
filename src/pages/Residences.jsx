import { useMemo, useState } from "react";

import PropertyCard from "../components/PropertyCard";
import SectionIntro from "../components/SectionIntro";

import { properties } from "../data/properties";

import "./Residences.css";

const propertyFilters = [
  "All",
  "Penthouse",
  "Villa",
  "House",
  "Apartment",
  "Townhouse",
];

function Residences() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = useMemo(() => {
    if (activeFilter === "All") {
      return properties;
    }

    return properties.filter((property) => property.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="page residences-page">
      <section className="residences-hero">
        <div className="container residences-hero-grid">
          <div>
            <span className="eyebrow">Residences</span>

            <h1>Residences with presence.</h1>
          </div>

          <p>
            Explore a curated selection of private homes, penthouses, villas,
            and apartments designed for a more refined way of living.
          </p>
        </div>
      </section>

      <section className="section residences-listing">
        <div className="container">
          <div className="residences-listing-header">
            <SectionIntro
              eyebrow="Curated Selection"
              title="Filtered by the way you live."
              text="Browse by residence type and explore homes selected for proportion, privacy, material quality, and lasting location value."
            />

            <div className="residences-count">
              <span>{filteredProperties.length}</span>
              <p>
                {filteredProperties.length === 1
                  ? "residence available"
                  : "residences available"}
              </p>
            </div>
          </div>

          <div className="property-filters" aria-label="Property filters">
            {propertyFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "property-filter property-filter-active"
                    : "property-filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="residences-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Residences;