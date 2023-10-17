import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Image from "next/image"
import {BiSolidChevronDown, BiSolidBellRing, BiSolidBell} from 'react-icons/bi'
import {BsFillBellFill} from 'react-icons/bs'



const Header = async () => {
  const session = await getServerSession(options)

  return (
   <header className="fixed z-30 right-0 left-0 top-0 bg-color pr-[40px] max-slg:px-[20px] flex justify-between items-center h-[100px] border-b-2 border-[rgba(0,_0,_0,_0.24)] ">
       <section className="max-slg:hidden">
          <Image 
          src={"/logo.png"} alt={"logo"} width={100} height={100} className="pl-[10px]"/>
       </section>
       <section className="max-slg:hidden">
          <p className="font-semibold text-lg">Welcome back, {session?.user?.name}</p>
       </section>
       <section className="flex items-center gap-2 text-sm cursor-pointer">
         <div>
            <img src={session?.user?.image ?? '/user3.png'} alt=""  className="w-[50px] h-[50px] rounded-full"/>
         </div>
         <p >{session?.user?.name}</p>
         <BiSolidChevronDown/>
         <section className="max-xsm:hidden">
         <BsFillBellFill/>
       </section>
       </section>


   </header>
  )
}

export default Header