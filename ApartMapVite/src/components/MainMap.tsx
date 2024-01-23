import { LatLngTuple } from "leaflet";
import "../styles/root.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface Marker {
  geocode: LatLngTuple; // Ensure geocode has the correct type
  id: number;
  Popup: string;
  position: number[]; // Allow for either string or number IDs
}

interface MapProps {
  center: number[];
  attribution?: string;
  url: string;
  markers: Marker[]; // Annotate markers as an array of Marker objects
}

export function MainMap({ center, attribution, url, markers }: MapProps) {
  console.log(markers);
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer attribution={attribution} url={url} scrollWheelZoom={false} />
      {markers.map((marker) => (
        <Marker position={marker.geocode} key={marker.id} />
      ))}
    </MapContainer>
  );
}
