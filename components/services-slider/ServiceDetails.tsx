"use client"
import Image from 'next/image'
import { servicesArr } from '@/constants/constants'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/variants'
const ServiceDetails = () => {
  return (
    <section className="flex justify-between p-[50px] mt-9 max-xsm:p-[25px] items-center max-md:justify-center">
         <motion.div className="bg-[url('/ring.png')] bg-cover bg-center basis-3/6 flex flex-col h-[470px] max-md:hidden "
         variants={fadeIn('down', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.6}}
         >
            <Image src={'/luxury.png'} alt={''} width={700} height={700} className='w-full h-full'/>
         </motion.div>
         <div>
            <h4 className="mb-1 text-[#494949] text-lg max-xsm:text-center">Explore  our first class services</h4>
            <p className="text-[30px] font-bold mb-12 max-xsm:text-center">Unlock an Exceptional Journey <br /> with Our Taxi Booking Services</p>
            <div className="flex flex-col gap-8">
                {
                    servicesArr.map((ser,index)=>{
                        return(
                            <section key={index} className="flex items-center gap-2">
                            <div className='bg-[#d6eefa] border-[#afddfa] w-[45px] h-[45px] flex justify-center items-center border-2 rounded-md text-[#6cacfc] text-[25px]'>
                                  {ser.icon}
                            </div>
                            <div className='flex flex-col gap-[1px] text-sm '>
                               <span className='font-bold'>{ser.heading}</span>
                               <span className='text-gray-500'>{ser.description}</span>
                            </div>
                       </section>
                        )
                    })
                }
            </div>
         </div>
    </section>
  )
}

export default ServiceDetails