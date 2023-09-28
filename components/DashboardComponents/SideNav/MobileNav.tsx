'use client';
import { NavItem } from "@/constants/constants"
import Image from "next/image";
import { useState } from 'react';


const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex fixed z-40 right-[20px] top-[40px] md:hidden">
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-30" onClick={toggleSidebar}></div>
      )}

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 w-[90%] bg-color shadow-lg z-40 transform transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 mt-[39px] mr-[51px]"
        >
          <img src="/cancelbar.svg" alt="closebar-icon" width={23} height={23} />
        </button>
        
        <section className='flex flex-col gap-[10px]  mt-[0px] ml-[47px]'>
        <div className="">
          <Image 
          src={"/logo.png"} alt={"logo"} width={100} height={100} />
       </div>
        <ul >
             {
               NavItem.map((item,index) =>{
                 return(
                   <a href={item.href} key={index} >
                   <li className="mobilenav-hover flex justify-between w-[210px] relative text-gray-700 mb-[20px] transition duration-300 rounded-lg pl-[10px] " key={index}>
                     <div className="flex gap-2 ">
                      <div className="p-2 border-[1px] border-gray-300 rounded-lg flex items-center item-icon "><span>{item.icon}</span></div>
                     <span className="flex items-center">{item.page}</span>
                     </div>
                   </li>
                   </a>
                 )
               })
             }
      </ul>

        </section>
      </div>

      <button
        onClick={toggleSidebar}
        className={`inset-y-0 right-0 z-50 flex items-center justify-center transition duration-300 transform ${
          isOpen ? 'hidden' : 'block'
        }`}>
        <img src="/baricon.svg" alt="bar-icon" width={19} height={14} />
      </button>
    </nav>
  );
};

export default MobileSidebar;
