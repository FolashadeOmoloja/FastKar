import Booking from "@/components/DashboardComponents/Bookings/Booking"
import Map from "@/components/DashboardComponents/Bookings/Map"


const Bookings = () => {
  return (
        <section className="flex max-md:flex-col">
           <Booking/>
           <Map/>
        </section>
  )
}

export default Bookings