import DotLoader from "@/components/DashboardComponents/DotLoader";
import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"
import dynamic from 'next/dynamic'

const DynamicTrackBooking = dynamic(() => import("@/components/DashboardComponents/TrackBookings/TrackBooking"), {
  loading: () => <DotLoader color="#2387FE" text="Map is loading"/>,
  ssr: false
});


const page = () => {
  return (
    <section>
        <SideNav activeItem={4}/>
    
          <DynamicTrackBooking/>
              
        
    </section>
  )
}

export default page