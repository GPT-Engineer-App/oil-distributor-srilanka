import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Index = () => {
  const distributionCenters = [
    { lat: 6.9271, lng: 79.8612, name: "Colombo" },
    { lat: 7.2906, lng: 80.6337, name: "Kandy" },
    { lat: 6.0535, lng: 80.2210, name: "Galle" },
    { lat: 8.3114, lng: 80.4037, name: "Anuradhapura" },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">eConsult International</h1>
        <p className="text-xl mt-2">Your trusted lubricant agent for Gulf Oil</p>
      </header>
      <main className="w-full flex flex-col items-center">
        <section className="w-3/4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Distribution Map - Sri Lanka</h2>
          <MapContainer center={[7.8731, 80.7718]} zoom={7} className="h-96 w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {distributionCenters.map((center, index) => (
              <Marker key={index} position={[center.lat, center.lng]}>
                <Popup>{center.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>
      <footer className="text-center mt-auto">
        <p>&copy; 2023 eConsult International. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;