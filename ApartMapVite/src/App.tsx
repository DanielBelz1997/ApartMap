import "./styles/root.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export function App() {
  const centerProp = [32.109333, 34.855499];

  return (
    <MapContainer center={centerProp} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        scrollWheelZoom={false}
      />
    </MapContainer>
  );
}
