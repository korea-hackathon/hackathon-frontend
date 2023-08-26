import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { googleMapUrl } from "../asset/googleMapUrl";
import { shipLocation } from "../apis/shipLocation";
import { danger } from "../apis/danger";
import { element } from "prop-types";

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
  const [dangerZone, setDangerZone] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    shipLocation()
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error");
      });
    setInterval(() => {
      shipLocation()
        .then((res) => {
          setLocation(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 60000);
    return () => {
      clearInterval();
    };
  }, []);

  useEffect(() => {
    danger()
      .then((res) => {
        setDangerZone(res.data);
      })
      .catch((err) => {
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

  const onFocus = () => {
    mapRef.current.panTo({
      lat: parseFloat(location.latitude),
      lng: parseFloat(location.longitude),
    });
  };

  return isLoaded ? (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true, styles: myStyles }}
    >
      {location ? (
        <>
          <MarkerF
            position={{
              lat: parseFloat(location.latitude),
              lng: parseFloat(location.longitude),
            }}
            icon={{
              url: "imgs/cargo-ship.png",
              scaledSize: new window.google.maps.Size(32, 32),
            }}
          />
          {dangerZone
            ? dangerZone.map((element) => (
                <MarkerF
                  position={{
                    lat: parseFloat(element.latitude),
                    lng: parseFloat(element.longitude),
                  }}
                  icon={{
                    url: "imgs/Ellipse.svg",
                    scaledSize: new window.google.maps.Size(32, 32),
                  }}
                />
              ))
            : null}
        </>
      ) : null}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
