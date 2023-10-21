"use client"
import BookRideButton from './BookRideButton'
import {AiFillRightCircle} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/variants'

const Herosection = () => {

  return (
    <main  id='home' className='flex md:flex-row flex-col p-[3rem] max-xsm:p-[2rem] max-xsm:pb-0 pb-0 overflow-hidden'>
         <section className='flex flex-col gap-9'>
               <motion.h1 
                  variants={fadeIn('down', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false,amount:0.6}}
               className='md:text-[50px] max-md:text-[35px] font-bold'>Your Swift, <span className='text-[#2387FE]'>Secure</span>, and Reliable Transportation Solution</motion.h1>
               <motion.p
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false,amount:0.6}}
               ><span className='text-[#2387FE]'>FastKar</span> ensures seamless journeys, offering swift, dependable, and efficient transportation services for your convenience and peace of mind.</motion.p>
               <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false,amount:0.8}}                 
               className='flex gap-11 max-xsm:gap-5 mt-7'>
                    <BookRideButton showIcon={true}/>
                    <a href="#" className='py-2 px-3 max-xsm:text-sm   rounded-md bg-[#2b2a2a] text-white flex items-center gap-3'> 
                    <span>Learn More</span>
                    <span className='text-sm'><AiFillRightCircle/></span>
                    </a>
               </motion.div>
         </section>
         <motion.section 
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false,amount:0.6}}         
         >
              <div className='lg:w-[650px] lg:h-[480px] max-lg:w-[500px] max-lg:h-[370px]  max-md:hidden'>
              <img src="/herobg.png" alt="background" className='w-full h-full'/>
              </div>
         </motion.section>
    </main>
  )
}

export default Herosection