import Image from "next/image"
import {BiSolidChevronDown, BiSolidBellRing, BiSolidBell} from 'react-icons/bi'
import {BsFillBellFill} from 'react-icons/bs'


const Header = () => {
  return (
   <header className="bg-color pr-[40px] max-xsm:pr-[10px] flex justify-between items-center h-[100px] border-gray-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
       <section>
          <Image 
          src={"/logo.png"} alt={"logo"} width={100} height={100} className="pl-[10px]"/>
       </section>
       <section className="max-sm:hidden">
          <p className="font-semibold text-lg">Welcome back,Shades!</p>
       </section>
       <section className="flex items-center gap-2 text-sm">
         <div>
            <img src="/user3.png" alt=""  className="w-[50px] h-[50px] rounded-full"/>
         </div>
         <p >Shade Omoloja</p>
         <BiSolidChevronDown/>
       </section>
       <section className="max-xsm:hidden">
         <BsFillBellFill/>
       </section>
   </header>
  )
}

export default Header