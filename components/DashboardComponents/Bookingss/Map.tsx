"use client"
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

interface Iprop {
  position?: [] | any;
  secondPosition?: [] | any;
}

const Map: React.FC<Iprop> = ({ position, secondPosition }) => {
  const map = useMap();

  // Update map center when secondPosition changes
  useEffect(() => {
    if (secondPosition) {
      map.setView(secondPosition, map.getZoom());
    }
  }, [secondPosition, map]);

  return (
    <section className='basis-[70%] h-[70vh]  rounded-lg'>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position && (
          <Marker
            icon={
              new L.Icon({
                iconUrl: '/cartooncar.png',
                iconRetinaUrl: '/cartooncar.png',
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowSize: [41, 41],
              })
            }
            position={position}
          >
            <Popup>Take a trip with FastKar</Popup>
          </Marker>
        )}
        {secondPosition && (
          <Marker
            icon={
              new L.Icon({
                iconUrl: '/cartooncar.png',
                iconRetinaUrl: '/cartooncar.png',
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowSize: [41, 41],
              })
            }
            position={secondPosition}
          >
            <Popup>Take a trip with FastKar</Popup>
          </Marker>
        )}
    </section>
  );
};

export default Map;
