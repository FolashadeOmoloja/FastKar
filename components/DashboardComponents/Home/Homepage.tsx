import Process from '@/components/Process'
import React from 'react'

const Homepage = () => {
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
            <button className='book-button sm:w-[300px] mt-5'>Book A ride</button>
         </div>


    </section>
  )
}

export default Homepage