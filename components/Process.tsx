import Image from "next/image"
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {BsCalendarHeartFill} from 'react-icons/bs'


const Process = () => {
  return (
   <section id="#how-it-works" className="flex flex-col pt-10 items-center p-[3rem] max-xsm:p-[2rem] max-xsm:pb-0 pb-0 ">
       <h3 className="mt-5 me-5 text-[#5e5f5f] text-sm">HOW IT WORKS</h3>
        <h2 className="text-lg">Your Path to Seamless and Effortless Travel Solutions</h2>
        <section className="flex">
            <div className="flex flex-col text-center items-center gap-3">
                  <div className="bg-[#f2f2f2] process-cards">
                       <span className="text-[#2387FE] text-[30px]"><HiLocationMarker/></span>
                  </div>
                  <span>Set a destination</span>
                  <span>Enter your destination to book your ride conveniently</span>
            </div>
            <div >
              <Image width={100} height={50} src='/right-arrow.webp' alt="arrow" className="max-xsm:hidden"/>
            </div>
            <div className="flex flex-col text-center items-center gap-3">
                  <div className="bg-bluegradient process-cards">
                       <span className="text-white text-[30px]"><BsFillCarFrontFill/></span>
                  </div>
                  <span>Select a vehicle</span>
                  <span>Pick your ride, choose your preferred vehicle with ease</span>
            </div>
            <div>
              <Image width={100} height={50} src='/right-arrow.webp' alt="arrow" className="max-xsm:hidden"/>
            </div>
            <div className="flex flex-col text-center items-center gap-3 ">
                  <div className="bg-[#f2f2f2] process-cards">
                       <span className="text-[#2387FE] text-[30px]"><BsCalendarHeartFill/></span>
                  </div>
                  <span>Book your Ride!</span>
                  <span>Book your ride, seize the journey ahead effortlessly.</span>
            </div>
        </section>
   </section>
  )
}

export default Process