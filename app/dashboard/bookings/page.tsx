"use client"
import Booking from "@/components/DashboardComponents/Bookingss/Booking"
import TripDetails from "@/components/DashboardComponents/Bookingss/TripDetails/TripDetails"
import { useState } from "react"



const Bookings = () => {
  const [tripDetailObject, setTripdetailObject] = useState({})
  const [show, setShow] = useState(false)
  return (
        <section >
            {
              show? 
              <Booking propSecondUseState={setShow} propUseState={setTripdetailObject}/>
              : <TripDetails tripDetailObject={tripDetailObject}/>

            }
      

        </section>
  )
}

export default Bookings