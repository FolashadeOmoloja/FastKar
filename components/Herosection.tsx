import Image from 'next/image'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import {AiFillRightCircle} from 'react-icons/ai'

const Herosection = () => {
  return (
    <main  id='home' className='flex md:flex-row flex-col p-[3rem] max-xsm:p-[2rem] max-xsm:pb-0 pb-0 overflow-hidden'>
         <section className='flex flex-col gap-9'>
               <h1 className='md:text-[50px] max-md:text-[35px] font-bold'>Your Swift, <span className='text-[#2387FE]'>Secure</span>, and Reliable Transportation Solution</h1>
               <p><span className='text-[#2387FE]'>FastKar</span> ensures seamless journeys, offering swift, dependable, and efficient transportation services for your convenience and peace of mind.</p>
               <div className='flex gap-11 max-xsm:gap-5 mt-7'>
                  <button className="book-button max-xsm:text-sm  flex items-center gap-3">
                    <span>Book Ride</span>
                    <span className='text-sm text-white'><BsFillCheckCircleFill/></span>
                  </button>
                    <a href="#" className='py-2 px-3 max-xsm:text-sm   rounded-md bg-[#2b2a2a] text-white flex items-center gap-3'> 
                    <span>Learn More</span>
                    <span className='text-sm'><AiFillRightCircle/></span>
                    </a>
               </div>
         </section>
         <section className="">
              <div className='lg:w-[650px] lg:h-[480px] max-lg:w-[500px] max-lg:h-[370px]  max-md:hidden'>
              <img src="/herobg.png" alt="background" className='w-full h-full'/>
              </div>
         </section>
    </main>
  )
}

export default Herosection