"use client"
import { useState } from "react";
import AutocompleteAddress from "./Autocompleteaddress"
import GeoSearchComponent from "./GeoSearch";
// Import the library
// @ts-ignore
import { OpenStreetMapProvider} from 'leaflet-geosearch';
import { MapContainer } from 'react-leaflet';

import dynamic from 'next/dynamic'
import L from 'leaflet';



const DynamicMap = dynamic(() => import('../Bookingss/Map'), {
  ssr: false
});







const Booking = () => {
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const [markerPosition, setMarkerPosition] = useState([6.4422871, 3.4874378]);
  const [secondMarkerPosition, setSeconderMarkerPosition] = useState([6.4422871, 3.4874378]);
  
  const handleAddressChange = (e:any) => {
    const { name, value } = e.target;
    if (name === 'addressFrom') {
      setAddressFrom(value);
     
    } else if (name === 'addressTo') {
      setAddressTo(value);
  
    }
  }; 



  const handleAddressSubmit = async () => {
    const provider = new OpenStreetMapProvider();
    const resultsFrom = await provider.search({ query: addressFrom });
    const resultsTo = await provider.search({ query: addressTo });
    if (resultsFrom.length > 0 && resultsTo.length > 0) {
      // const positionFrom = resultsFrom[0].lat;
      const positionFrom = [resultsFrom[0].y, resultsFrom[0].x];
      const positionTo = [resultsTo[0].y, resultsTo[0].x];
       
            console.log('hi')
      setMarkerPosition(positionFrom);
      setSeconderMarkerPosition(positionTo)
      console.log(secondMarkerPosition)
      // Perform any other necessary actions with the geocoded positions
    }
  };


  

  // const handleSearch = (results:any) => {
  //   setSearchResults(results);
  //   console.log(searchResults)

  // };

  return (
    <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
        <section className=' basis-[30%]'>
           <AutocompleteAddress handleAddressChange={handleAddressChange} addressFrom={addressFrom} addressTo={addressTo} handleAddressSubmit={handleAddressSubmit}/>
                       <GeoSearchComponent  />
        </section>
        <MapContainer
      center={secondMarkerPosition as any}
      zoom={13}
      className='w-full md:h-full max-md:h-[70vh] rounded-lg'
    >
           <DynamicMap position={markerPosition} secondPosition={secondMarkerPosition}/>
        
           </MapContainer>


        

    </section>
  )
}

export default Booking