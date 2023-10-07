import { vehicles } from "@/constants"
import {PiMotorcycleFill} from 'react-icons/pi'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {MdOutlineAirlineSeatReclineNormal, MdLuggage , MdNoLuggage} from 'react-icons/md'
import Image from 'next/image'

const CarListPage = () => {
  return (
    <section>
      <div className="flex justify-between mb-7 font-semibold">
      <h3 className='text-[20px] '>Car Catalog</h3>
      <p className='text-sm'>Explore Our Cars</p>
      </div>
      <section className="flex gap-5 flex-wrap">
           {
               vehicles.map((veh, index)=>{
                return (
                <div className="max-w-[300px] flex flex-col rounded-[1rem] mx-auto sm:mx-0 bg-white h-[360px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-sm:max-w-[270px]">
                <p className="font-bold mb-6 px-10 pt-6 max-xsm:pt-3">{veh.type}</p>
                <div className="px-10">
                  <img src={veh.image} alt={"img"}  className="mb-5 h-[200px] w-[340px] "/>
                  </div>
                 <div className="px-10">
                      <div className="text-gray-500 flex justify-between text-sm">
                           <div className="flex flex-col gap-[8px] justify-between items-center">
                            <span>{veh.auto?<BsFillCarFrontFill/>:<PiMotorcycleFill/>}</span>
                            <span>{veh.vehname}</span>
                          </div>
                          <div className="flex flex-col gap-[8px] justify-between items-center">
                            <span>{<MdOutlineAirlineSeatReclineNormal/>}</span>
                            <span>{veh.seat} Seat</span>
                          </div>
                          <div className="flex flex-col gap-[8px] justify-between items-center">
                            <span>{veh.auto?<MdLuggage/>:<MdNoLuggage/>}</span>
                            <span>Bags</span>
                          </div>
                      </div>
                      <div className="book-button opacity-0">
                          <span>Show Details</span>
                      </div>
                 </div>
               {/* <div className="flex justify-between px-10">
               <div className="flex">{stars}</div>
               <span className="text-gray-700 text-sm ">{veh.reviews}</span>
               </div>
               <p className="mt-3 px-10">{veh.description}</p> */}
               {/* <button className="w-full h-[65px] rounded-b-[1rem] bg-bluegradient mt-3 text-white font-semibold bg-200% hover:bg-right-center transition-[background] duration-[400ms] ease-in-out " >
                   Show Details
               </button> */}
              </div>
                )
               })
           }
      </section>
    </section>
  )
}

export default CarListPage