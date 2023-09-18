import { NavItem } from "@/constants/constants"

export const SideNav = () => {
  return (
  <nav className="top-[100px] left-0 bottom-0 h-[100vh]  bg-color w-[270px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center py-7 border-r-2 border-[rgba(0,_0,_0,_0.24)]">
    {/* <span className="font-semibold text-lg">Menu</span> */}
      <ul >
{
  NavItem.map((item,index) =>{
    return(
      <li className="flex justify-between text-gray-700 mb-[20px] transition duration-300 bg-[#E3F0F9] pl-2 py-2" key={index}>
        <div className="flex gap-2 ">
         <div className="p-2 border-[1px] border-gray-300 rounded-lg flex items-center "><span>{item.icon}</span></div>
          <a href="#" className="flex items-center"><span>{item.page}</span></a>
        </div>
        <div className=" w-[20px] h-[20px] bg-red-500 rounded-l-full"></div>
      </li>
    )
  })
}
      </ul>
      <div className="relative w-48 h-24 bg-blue-500 text-white text-center flex items-center justify-between transition duration-300">
      Hover over me!
      <div className=" w-[50px] h-full bg-red-500 rounded-l-full opacity-0 transition duration-300 hover:opacity-100"></div>
    </div>
      
  </nav>
  )
}
