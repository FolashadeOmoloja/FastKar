import Homepage from "@/components/DashboardComponents/Home/Homepage"
import { SideNav } from "@/components/DashboardComponents/SideNav/SideNav"

const page = () => {
  return (
    <div>
       <SideNav activeItem={0}/>
       <Homepage/>
    </div>
  )
}

export default page