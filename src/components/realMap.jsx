import React, { useEffect, useState } from "react";
import { shipLocation } from "../apis/shipLocation";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { googleMapUrl } from "../asset/googleMapUrl";

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 0,
  lng: 0,
};

function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    shipLocation()
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        alert("Error");
        console.error(err);
      });
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${googleMapUrl}`,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        styles: myStyles,
        libraries: ["places"],
        language: "ja",
      }}>
      {location && (
        <MarkerF
          onLoad={onLoad}
          position={{
            lat: `${location.latitude}`,
            lng: `${location.longitude}`,
          }}
          icon={{
            url: "imgs/cargo-ship.png",
            scaledSize: new window.google.maps.Size(32, 32),
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
