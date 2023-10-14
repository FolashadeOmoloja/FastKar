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
             <Process/>
         </section>


    </section>
  )
}

export default Homepage