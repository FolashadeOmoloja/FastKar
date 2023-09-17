import { NavItem } from "@/constants/constants"

export const SideNav = () => {
  return (
  <nav className="sticky top-[100px] left-0 bottom-0 h-[100vh] overflow-y-scroll bg-color w-[270px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
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
