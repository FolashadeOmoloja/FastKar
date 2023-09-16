import Image from "next/image"

const Header = () => {
  return (
   <header>
       <section>
          <Image 
          src={"/logo.png"} alt={"logo"} width={125} height={125} className="max-xsm:w-[100px] max-xsm:h-[100px]"/>
       </section>
   </header>
  )
}

export default Header