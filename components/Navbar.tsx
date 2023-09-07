import BookRideButton from "./BookRideButton";
import { NavLinks } from "@/constants"
import Image from "next/image"



const Navbar = () => {

  return (
    <nav className="flex px-[2.5rem] max-lg:justify-between max-lg:px-[2rem] max-xsm:px-[1rem] ">
       <div>
          <Image 
          src={"/logo.png"} alt={"logo"} width={125} height={125} className="max-xsm:w-[100px] max-xsm:h-[100px]"/>
       </div>
       <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {NavLinks.map((item) => (
            <li key={item.label} className="nav-links">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
            <BookRideButton className="mt-10 me-6 max-xsm:me-2 max-xsm:mt-8" />
        </div>
    </nav>
  )
}

export default Navbar