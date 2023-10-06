"use client"
import Booking from "@/components/DashboardComponents/Bookingss/Booking"
import TripDetails from "@/components/DashboardComponents/Bookingss/TripDetails/TripDetails"
import TripConfirmed from "@/components/DashboardComponents/Bookingss/TripConfirmed/TripConfirmed"
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
  const [secondShow, setSecondShow] = useState(true)
  const [uniqueId, setUniqueId] = useState('')
  return (
        <section >
            {
              show? 
              <Booking propSecondUseState={setShow} propUseState={setTripdetailObject}/>
              : secondShow?
              <TripDetails tripDetailObject={tripDetailObject as {
                pick:'',
                drop:'',
                duration: '',
                distance: '',
                price: 0,
                vehicleType: '',
                vehImg: ''
                
              } } propUseState={setShow} propSecondUseState={setSecondShow} propThirdUseState={setUniqueId}
              />: <TripConfirmed uniqueID={uniqueId}/>

            }
      

        </section>
  )
}

export default Bookings