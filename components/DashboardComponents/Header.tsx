import Image from "next/image"
import {BiSolidChevronDown, BiSolidBellRing, BiSolidBell} from 'react-icons/bi'
import {BsFillBellFill} from 'react-icons/bs'


const Header = () => {
  return (
   <header className="flex">
       <section>
          <Image 
          src={"/logo.png"} alt={"logo"} width={125} height={125} className="max-xsm:w-[100px] max-xsm:h-[100px]"/>
       </section>
       <section>
          <p>Welcome back,Shades!</p>
       </section>
       <section>
         <div>
            <img src="" alt="" />
         </div>
         <p>Shade Omoloja</p>
         <BiSolidChevronDown/>
       </section>
       <section>
         <BsFillBellFill/>
       </section>
   </header>
  )
}

export default Header