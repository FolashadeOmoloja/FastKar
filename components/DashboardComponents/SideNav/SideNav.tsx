import { NavItem } from "@/constants/constants"

export const SideNav = () => {
  return (
  <nav className="fixed top-[100px] left-0 bottom-0 h-[100vh]  bg-color w-[270px]  flex flex-col items-center py-7 border-r-2 border-[rgba(0,_0,_0,_0.24)]">
    {/* <span className="font-semibold text-lg">Menu</span> */}
      <ul>
{
  NavItem.map((item,index) =>{
    return(
      <li className="flex gap-2" key={index}>
      <span>{item.icon}</span>
      <a href="#">{item.page}</a>
      </li>
    )
  })
}
      </ul>
  </nav>
  )
}
