'use client'
import Image from "next/image"
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {BsCalendarHeartFill} from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from "@/constants/variants"

interface Iprop{
     pt?: string
}
const Process:React.FC<Iprop> = ({pt='pt-[130px]'}) => {
  return (
   <motion.section 
   variants={fadeIn('down', 0.2)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false,amount:0.4}}
   id="how-it-works" className={`page-transition flex flex-col ${pt} items-center px-[3rem] max-xsm:px-[32px]`}>
       <h3 className="mb-1 text-[#494949] text-sm">HOW IT WORKS</h3>
        <h2 className="text-[30px] text-center font-bold mb-12">Your Path to Seamless Travel Solutions</h2>
        <section className="flex max-sm:flex-col max-sm:gap-3">
            <div className="flex flex-col text-center items-center gap-3">
                  <div className="bg-[#f2f2f2] process-cards">
                       <span className="text-[#2387FE] text-[30px]"><HiLocationMarker/></span>
                  </div>
                  <span className="font-semibold">Set a destination</span>
                  <span className="text-sm ">Enter your destination to book your ride conveniently</span>
            </div>
            <div >
              <Image width={100} height={50} src='/right-arrow.webp' alt="arrow" className="max-md:hidden"/>
            </div>
            <div className="flex flex-col text-center items-center gap-3">
                  <div className="bg-bluegradient process-cards">
                       <span className="text-white text-[30px]"><BsFillCarFrontFill/></span>
                  </div>
                  <span className="font-semibold">Select a vehicle</span>
                  <span className="text-sm ">Pick your ride, choose your preferred vehicle with ease</span>
            </div>
            <div>
              <Image width={100} height={50} src='/right-arrow.webp' alt="arrow" className="max-md:hidden"/>
            </div>
            <div className="flex flex-col text-center items-center gap-3 ">
                  <div className="bg-[#f2f2f2] process-cards">
                       <span className="text-[#2387FE] text-[30px]"><BsCalendarHeartFill/></span>
                  </div>
                  <span className="font-semibold">Book your Ride!</span>
                  <span className="text-sm ">Book your ride, seize the journey ahead effortlessly.</span>
            </div>
        </section>
   </motion.section>
  )
}

export default Process