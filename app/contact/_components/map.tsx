"use client";

import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export function SchoolMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_API_KEY || "",
  });
  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
  const center = useMemo(
    () => ({ lat: 14.571496151213093, lng: 121.03720532944776 }),
    []
  );

  if (!isLoaded) return <div className="w-full text-center">Loading...</div>;

  return (
    <div className="w-full">
      <GoogleMap
        zoom={15}
        options={options}
        center={center}
        mapContainerStyle={containerStyle}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
