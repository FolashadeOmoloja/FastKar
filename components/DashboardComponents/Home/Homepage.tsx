"use client"
import Process from '@/components/Process'
import { useRouter } from "next/navigation";
import React from 'react';
import CustomerCareIcon from '../CustomerCareIcon';

interface Iprop{
    propUseState?: (value:1 ) => void; 
}

const Homepage:React.FC<Iprop> = ({propUseState}) => {
    
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard/bookings');
      };
  return (
    <section className='flex flex-col items-center'>
        <h1 className='text-[30px] font-bold'>Welcome to your Fastkar Dashboard</h1>
        <div>
            <img src='/welcome.png' alt="" />
        </div>

         <section>
             <Process pt='pt-[20px]'/>
         </section>
         <div>
            <button className='book-button sm:w-[300px] mt-10' 
            onClick={()=>{ propUseState}}>Book A ride</button>
         </div>
         <div className="fixed right-[20px] bottom-[50px] ">
        <CustomerCareIcon/>
        </div>


    </section>
  )
}

export default Homepage