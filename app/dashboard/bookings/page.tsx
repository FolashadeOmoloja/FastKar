import Booking from "@/components/DashboardComponents/Bookings/Booking"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../../components/DashboardComponents/Bookings/Map'), {
  ssr: false
});

const Bookings = () => {
  return (
        <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
           <Booking/>
           <DynamicMap/>
        </section>
  )
}

export default Bookings