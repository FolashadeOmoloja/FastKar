import { NavItem } from "@/constants/constants"

export const SideNav = () => {
  return (
  <nav className="sticky top-[100px] left-0 bottom-0 h-full bg-white w-[270px]">
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
