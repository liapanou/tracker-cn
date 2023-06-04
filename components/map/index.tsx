"use client";
import mapboxgl, { LngLat, LngLatBoundsLike } from "mapbox-gl";
import { ReactNode, useEffect, useRef, useState } from "react";
import Map, { GeolocateControl, Marker, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Controls() {}

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const MyMap = () => {
  return (
    <div className="w-full md:h-screen h-[95vh] sticky  overflow-hidden">
      <Map
        initialViewState={{
          longitude: 23.5061835,
          latitude: 38.0,
          zoom: 7,
        }}
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      ></Map>
    </div>
  );
};
