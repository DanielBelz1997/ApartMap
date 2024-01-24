import { MainMap } from "../components/MainMap";

export interface Markers {
  id: number;
  position: [number, number];
  popup: string;
}

export function RootPage() {
  const centerProp = [32.109333, 34.855499];
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  // demo data need to come from backend

  const markers: Markers[] = [
    { id: 1, position: [32.2323, 38.5454], popup: "hello" },
    { id: 1, position: [33.2323, 38.5454], popup: "hello num 2" },
  ];
  return (
    <MainMap
      center={centerProp}
      attribution={attribution}
      url={url}
      markers={markers}
    />
  );
}
