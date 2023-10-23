"use client"
import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"
import dynamic from 'next/dynamic'
import DotLoader from "@/components/DashboardComponents/DotLoader"



const DynamicMainBooking = dynamic(() => import('@/components/DashboardComponents/Bookingss/MainBooking'), {
  loading: () =>   <DotLoader color="#2387FE" text="Map is loading"/>,
  ssr: false
});




const Bookings = () => {
  return (
        <section >
            <SideNav activeItem={1}/>
            <DynamicMainBooking/>
      

        </section>
  )
}

export default Bookings