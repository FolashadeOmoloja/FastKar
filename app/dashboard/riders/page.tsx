import Riders from "@/components/DashboardComponents/Riders/Riders"
import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"


const page = () => {
  return (
    <section>
        <SideNav activeItem={3}/>
        <Riders/>
    </section>
  )
}

export default page