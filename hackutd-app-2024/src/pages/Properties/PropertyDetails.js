import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Properties from "./Properties";

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const navigate = useNavigate(); // Initialize the navigate hook

  // Find the property by ID
  const property = Properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <h2>Property not found!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{property.name}</h2>
      <p><strong>Address:</strong> {property.address}</p>
      <p><strong>Sustainability:</strong> {property.sustainability}</p>
      <p><strong>Weekly Cost:</strong> {property.weeklyCost}</p>
      <p><strong>Weekly Carbon Footprint:</strong> {property.weeklyCarbonFootprint}</p>

      <h3>Resources:</h3>
      <div>
        {["electricity", "water", "gas"].map((resource) => (
          <div key={resource} style={{ marginBottom: "10px" }}>
            <h4>{resource.charAt(0).toUpperCase() + resource.slice(1)}</h4>
            <p><strong>Total Cost:</strong> {property.resources[resource].totalCost}</p>
            <ul>
              {property.resources[resource].devices.map((device, index) => (
                <li key={index}>
                  <strong>{device.name}</strong> ({device.category}): {device.usage}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button to navigate back to the profile */}
      <button
        onClick={() => navigate("/profile")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Profile
      </button>
    </div>
  );
};

export default PropertyDetails;