import React, { useRef, useEffect } from "react";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

export function Root() {
  const mapDiv = useRef(null);

  const featureLayerData = [
    {
      attributes: {
        OBJECTID: 1,
        Name: "Feature 1",
        Type: "Type A",
        Status: "Active",
      },
      geometry: {
        type: "point",
        longitude: -118.805,
        latitude: 34.027,
      },
    },
    {
      attributes: {
        OBJECTID: 2,
        Name: "Feature 2",
        Type: "Type B",
        Status: "Inactive",
      },
      geometry: {
        type: "point",
        longitude: -118.81,
        latitude: 34.03,
      },
    },
    // Add more features as needed
  ];

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        portalItem: {
          id: "e691172598f04ea8881cd2a4adaa45ba",
        },
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
      });

      const bookmarks = new Bookmarks({
        view,
        editingEnabled: true,
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true,
      });

      view.ui.add(bkExpand, "top-right");

      webmap.when(() => {
        if (webmap.bookmarks && webmap.bookmarks.length) {
          console.log("Bookmarks: ", webmap.bookmarks.length);
        } else {
          console.log("NO BOOKMARK ON THIS MAP");
        }
      });
    }
  }, [mapDiv]);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
    </>
  );
}
