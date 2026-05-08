import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <Link to="/residences" className="property-card-link">
        <div className="property-card-image">
          <img src={property.image} alt={property.name} />
        </div>

        <div className="property-card-content">
          <div>
            <p className="property-card-type">{property.type}</p>
            <h3>{property.name}</h3>
          </div>

          <div className="property-card-meta">
            <span>{property.location}</span>
            <span>{property.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PropertyCard;