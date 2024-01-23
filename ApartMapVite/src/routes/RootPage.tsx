import { MainMap } from "../components/MainMap";

export function RootPage() {
  const centerProp = [32.109333, 34.855499];
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  // demo data need to come from backend

  const markers = [
    {
      id: 1,
      goecode: [33.109333, 35.855499, undefined],
      Popup: "hello, im pop up number 1", //html
    },
    {
      id: 2,
      goecode: [34.229333, 33.445499, undefined],
      Popup: "hello, im pop up number 2",
    },
    {
      id: 3,
      goecode: [38.109333, 35.855499, undefined],
      Popup: "hello, im pop up number 3",
    },
    {
      id: 4,
      goecode: [37.109333, 35.855499, undefined],
      Popup: "hello, im pop up number 4",
    },
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
