import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"
import TrackBooking from "@/components/DashboardComponents/TrackBookings/TrackBooking"
import dynamic from 'next/dynamic'

const DynamicTrackBooking = dynamic(() => import("@/components/DashboardComponents/TrackBookings/TrackBooking"), {
  loading: () => <p className="text-lg font-semibold text-[#2387FE]">Page loading ...</p>,
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