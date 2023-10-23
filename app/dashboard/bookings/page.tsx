"use client"
import TripDetails from "@/components/DashboardComponents/Bookingss/TripDetails/TripDetails"
import TripConfirmed from "@/components/DashboardComponents/Bookingss/TripConfirmed/TripConfirmed"
import { useState } from "react"
import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"
import dynamic from 'next/dynamic'
import DotLoader from "@/components/DashboardComponents/DotLoader"


const DynamicBooking = dynamic(() => import('@/components/DashboardComponents/Bookingss/Booking'), {
  loading: () =>   <DotLoader color="#2387FE" text="Map is loading"/>,
  // <p className="text-lg font-semibold text-[#2387FE]"> ...</p>
  ssr: false
});




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
  const [show, setShow] = useState(true)
  const [secondShow, setSecondShow] = useState(true)
  const [uniqueId, setUniqueId] = useState('')
  return (
        <section >
            <SideNav activeItem={1}/>
             {
              show? 
              typeof window !== 'undefined' && (
                <DynamicBooking propSecondUseState={setShow} propUseState={setTripdetailObject}/>
              )


              : secondShow?
              typeof window !== 'undefined' && (
                <TripDetails tripDetailObject={tripDetailObject as {
                  pick:'',
                  drop:'',
                  duration: '',
                  distance: '',
                  price: 0,
                  vehicleType: '',
                  vehImg: ''
                  
                } } propUseState={setShow} propSecondUseState={setSecondShow} propThirdUseState={setUniqueId}
                />
              )              
: <TripConfirmed uniqueID={uniqueId}/>

            }
      

        </section>
  )
}

export default Bookings