import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Properties from "./Properties";

const PropertyFormat = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`); // Navigate to the property's details page
  };

  return (
    <div>
      <h2>Properties</h2>
      {Properties.map((property) => (
        <div
          key={property.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => handlePropertyClick(property.id)} // Navigate when the property is clicked
        >
          <h3>{property.name}</h3>
          <p>{property.address}</p>
          <p><strong>Sustainability:</strong> {property.sustainability}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyFormat;