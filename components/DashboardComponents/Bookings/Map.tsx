'use client'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <section className=' basis-[70%] h-[70vh] border-2 border-[#2387FE] rounded-lg'>
           <MapContainer 
              center={[51.505, -0.09]} 
              zoom={13} 
              className='w-full md:h-full max-md:h-[70vh] rounded-lg '
           >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={
                    new L.Icon({
                        iconUrl: '/locationmarker.png',
                        iconRetinaUrl: '/locationmarker.png',
                        iconSize: [25, 30],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowSize: [41, 41],
                    })
                } position={[51.505, -0.09]}>
                     <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
    </MapContainer>
    </section>
  )
}

export default Map