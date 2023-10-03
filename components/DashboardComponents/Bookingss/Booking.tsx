"use client"
import { useState,useEffect } from "react";
import AutocompleteAddress from "./Autocompleteaddress"
// Import the library
// @ts-ignore
import { OpenStreetMapProvider} from 'leaflet-geosearch';
import { calculateDistance, estimateCarTravelTime } from "@/constants";

import dynamic from 'next/dynamic'




const DynamicMap = dynamic(() => import('../Bookingss/Map'), {
  ssr: false
});


const Booking = () => {
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const [markerPosition, setMarkerPosition] = useState([6.4422871, 3.4874378]);
  const [secondMarkerPosition, setSeconderMarkerPosition] = useState([6.4422871, 3.4874378]);
  const [distance, setDistance] = useState(0);
  const [distanceDisplay, setDistanceDisplay] = useState('')
  const [travelTime, setTravelTime] = useState('');

   

  useEffect(() => {
    const calculatedDistance = calculateDistance(
      markerPosition as [number, number],
      secondMarkerPosition as [number, number]
    );
    setDistance(calculatedDistance.distance);
    setDistanceDisplay(calculatedDistance.distanceDisplay)
    const calculatedTravelTime = estimateCarTravelTime(calculatedDistance.distance);
    setTravelTime(calculatedTravelTime.timeDisplay);
   
  }, [markerPosition, secondMarkerPosition]);
 
  console.log(distance, distanceDisplay, travelTime)
  const handleAddressSubmit = async () => {
    const provider = new OpenStreetMapProvider();
    const resultsFrom = await provider.search({ query: addressFrom });
    const resultsTo = await provider.search({ query: addressTo });
    console.log(addressFrom)
    if (resultsFrom.length > 0 && resultsTo.length > 0) {
      // const positionFrom = resultsFrom[0].lat;
      const positionFrom = [resultsFrom[0].y, resultsFrom[0].x];
      const positionTo = [resultsTo[0].y, resultsTo[0].x];
      setMarkerPosition(positionFrom);
      setSeconderMarkerPosition(positionTo)
      console.log(markerPosition)
      // Perform any other necessary actions with the geocoded positions

    }
  };


 

  return (
    <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
        <section className=' basis-[30%]'>
           <AutocompleteAddress  propUseState={setAddressFrom} propSecondUseState={setAddressTo} handleAddressSubmit={handleAddressSubmit}/>
        </section>

           <DynamicMap position={markerPosition} secondPosition={secondMarkerPosition}/>
        
        


        

    </section>
  )
}

export default Booking