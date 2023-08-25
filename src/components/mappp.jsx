// import { useState, useEffect, useRef } from "react";

// const Mappp = () => {
//   const [map, setMap] = useState(null);
//   const ref = useRef();

//   const initMap = () => {
//     var map = new window.google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });

//     return map;
//   };

//   useEffect(() => {
//     const newMap = initMap();

//     setMap(newMap);
//   }, []);

//   return (
//     <div ref={ref} id='map' style={{ width: "400px", height: "400px" }}></div>
//   );
// };

// export default Mappp;

import React, { useEffect, useRef } from "react";

const Mappp = () => {
  const ref = useRef();

  useEffect(() => {
    // Google Maps API 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrmYJG5RmPbAR80yBHQGTfPjNP1lDLyGo&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // initMap 함수 정의
    window.initMap = () => {
      const mapElement = ref.current;

      if (mapElement) {
        const map = new window.google.maps.Map(mapElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      } else {
        console.error("Could not find map element.");
      }
    };

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={ref} id="map" style={{ width: "400px", height: "400px" }}></div>
  );
};

export default Mappp;
