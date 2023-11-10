"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
      },

      function (error) {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: location.lat ? location.lat : 1.492659,
        lng: location.lng ? location.lng : 103.741356,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 20),
      };

      const user = new google.maps.Marker({
        position: location,
        map,
        icon: svgMarker,
      });

      for (let i = 1; i <= 5; i++) {
        new google.maps.Marker({
          position: {
            lat: location.lat + i / 1000,
            lng: location.lng + i / 1000,
          },
          map,
        });
      }
    };
    initMap();
  }, [location]);

  return <div className="h-[600px]" ref={mapRef}></div>;
}
