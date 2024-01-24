import { LatLngExpression } from "leaflet";
import { Markers } from "../routes/RootPage";
import "../styles/root.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Key } from "react";

interface MapProps {
  center: number[];
  attribution?: string;
  url: string; // Annotate markers as an array of Marker objects
  markers: Markers[];
}

export function MainMap({ center, attribution, url, markers }: MapProps) {
  console.log(markers);
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer attribution={attribution} url={url} scrollWheelZoom={false} />
      {markers.map(
        (marker: {
          popup: string;
          position: LatLngExpression;
          id: Key | null | undefined;
        }) => (
          <>
            <Marker position={marker.position} key={marker.id}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          </>
        )
      )}
    </MapContainer>
  );
}
