import { MapContainer } from "react-leaflet";
import Map from "./Map";
interface Iprop {
    markerPosition?: [] | any;
    secondMarkerPosition?: [] | any;
  }
  
const LeafletMap:React.FC<Iprop> = ({markerPosition,secondMarkerPosition}) => {
  return (
    <>
    {
        typeof window !== 'undefined'?
    <MapContainer
    center={secondMarkerPosition as any || [0, 0]}
    zoom={13}
    className='w-full md:h-full max-md:h-[70vh] rounded-lg border-2 border-[#2387FE]'
    style={{ height: '70vh' }}
  >
       <Map position={markerPosition} secondPosition={secondMarkerPosition}/>
   </MapContainer>:null }

   </>
  )
}

export default LeafletMap