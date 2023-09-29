"use client"
import AutocompleteAddress from "./Autocompleteaddress"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../../components/DashboardComponents/Bookings/Map'), {
  ssr: false
});




const Booking = () => {
  return (
    <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
        <section className=' basis-[30%]'>
           <AutocompleteAddress/>
        </section>
  
           <DynamicMap/>

        

    </section>
  )
}

export default Booking