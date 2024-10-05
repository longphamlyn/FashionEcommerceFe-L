// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "500px",
  width: "100%",
};

const center = {
  lat: 40.73061, // Vị trí mặc định của bản đồ
  lng: -73.935242,
};

export default function LocationMap() {
  const storesLocations = [
    { name: "Store 1", location: { lat: 40.73061, lng: -73.935242 } },
    { name: "Store 2", location: { lat: 40.74061, lng: -73.945242 } },
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {storesLocations.map((store, index) => (
          <Marker key={index} position={store.location} label={store.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
