"use client"
import Booking from "@/components/DashboardComponents/Bookingss/Booking"
import TripDetails from "@/components/DashboardComponents/Bookingss/TripDetails/TripDetails"
import { useState } from "react"



const Bookings = () => {
  const [tripDetailObject, setTripdetailObject] = useState({
    pick: '',
    drop:'',
    duration: '',
    distance: '',
    price: 0,
    vehicleType: '',
    vehImg: ''
  })
  const [show, setShow] = useState(false)
  return (
        <section >
            {
              show? 
              <Booking propSecondUseState={setShow} propUseState={setTripdetailObject}/>
              : <TripDetails tripDetailObject={tripDetailObject as {
                pick:'',
                drop:'',
                duration: '',
                distance: '',
                price: 0,
                vehicleType: '',
                vehImg: ''
                
              } } propUseState={setShow}/>

            }
      

        </section>
  )
}

export default Bookings