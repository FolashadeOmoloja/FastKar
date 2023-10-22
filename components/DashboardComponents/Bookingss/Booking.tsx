import { useState,useEffect } from "react";
import AutocompleteAddress from "./Autocompleteaddress"
// Import the library
// @ts-ignore
import { OpenStreetMapProvider} from 'leaflet-geosearch';
import { calculateDistance, estimateCarTravelTime } from "@/constants";
import CarList from "./CarList";
import React from "react";
import LeafletMap from "./LeafletMap";


interface Iprop {
  propUseState?: (value: {
    pick:'',
    drop:'',
    duration: '',
    distance: '',
    price: 0,
    vehicleType: '',
    vehImg: ''
  }) => void; 
  propSecondUseState?: (value: boolean) => void; 
}
const Booking:React.FC<Iprop> = ({propUseState, propSecondUseState}) => {
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
 
 
  const handleAddressSubmit = async () => {
    const provider = new OpenStreetMapProvider();
    const resultsFrom = await provider.search({ query: addressFrom });
    const resultsTo = await provider.search({ query: addressTo })

    if (resultsFrom.length > 0 && resultsTo.length > 0) {
      const positionFrom = [resultsFrom[0].y, resultsFrom[0].x];
      const positionTo = [resultsTo[0].y, resultsTo[0].x];
      setMarkerPosition(positionFrom);
      setSeconderMarkerPosition(positionTo)
      // Perform any other necessary actions with the geocoded positions

    }
  };


 

  return (
    <section>
    <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
        <section className=' basis-[30%]'>
           <AutocompleteAddress  propUseState={setAddressFrom} propSecondUseState={setAddressTo} handleAddressSubmit={handleAddressSubmit}/>

        </section>
        <section className="relative basis-[70%] h-[70vh]  rounded-lg">
          {
            typeof window !== 'undefined' && (
              <LeafletMap markerPosition={markerPosition} secondMarkerPosition={secondMarkerPosition}/>
            )
          }
           
           <div className="distance-bar"><span className="">{distanceDisplay} Duration: {travelTime}</span></div>
        </section>        

    </section>
    <CarList travelDistance={distance} drop={addressTo} pick={addressFrom} duration={travelTime} distance={distanceDisplay} propSecondUseState={propSecondUseState} propUseState={propUseState}/>
    </section>
  )
}

export default Booking