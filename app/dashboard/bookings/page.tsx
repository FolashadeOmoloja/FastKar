import Booking from "@/components/DashboardComponents/Bookingss/Booking"
import { useState } from "react"



const Bookings = () => {
  const [tripDetailObject, setTripdetailObject] = useState({})
  return (
        <section >
           <Booking/>
      

        </section>
  )
}

export default Bookings