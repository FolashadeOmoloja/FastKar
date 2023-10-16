import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"
import TrackBooking from "@/components/DashboardComponents/TrackBookings/TrackBooking"


const page = () => {
  return (
    <section>
        <SideNav activeItem={4}/>
        <TrackBooking/>
    </section>
  )
}

export default page