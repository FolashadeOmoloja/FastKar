'use client'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <section className=' basis-[70%] h-[70vh] border-2 border-[#2387FE] rounded-lg'>
           <MapContainer 
              center={[51.505, -0.09]} 
              zoom={13} 
              className='w-full h-[70vh] rounded-lg '
           >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]} />
    </MapContainer>
    </section>
  )
}

export default Map