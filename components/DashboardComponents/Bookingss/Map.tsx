'use client'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// Import the library
// @ts-ignore
import { OpenStreetMapProvider,  GeoSearchControl } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';


interface Iprop {
position?: [] | any
secondPosition?: [] | any
}


// Define your Map component here (same as before)

const Map: React.FC<Iprop> = ({ position, secondPosition }) => {
  const map = useMap();

  // Create a new instance of the OpenStreetMapProvider
  const provider = new OpenStreetMapProvider();

  // Create a GeoSearchControl instance and add it to the map
  const searchControl = new GeoSearchControl({
    provider: provider,
    autoCompleteDelay: 250,
    showMarker: true,
    showPopup: false,
    marker: {
      icon: new L.Icon.Default(),
      draggable: false,
    },
  });

  searchControl.addTo(map);

  return (
    <section className='basis-[70%] h-[70vh] border-2 border-[#2387FE] rounded-lg'>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
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
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </section>
  );
};

export default Map;

