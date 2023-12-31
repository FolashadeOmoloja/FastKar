import { vehicles } from "@/constants"
import {PiMotorcycleFill} from 'react-icons/pi'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {MdOutlineAirlineSeatReclineNormal, MdLuggage , MdNoLuggage} from 'react-icons/md'
import CustomerCareIcon from "../CustomerCareIcon"


const CarListPage = () => {
  return (
    <section>
       <div className="mb-5">
       <h3 className="text-[30px] font-semibold text-[#2387FE]">FastKar Catalog</h3>
      <span className="text-sm font-semibold">Explore Our Cars</span>
       </div>
      <section className="flex gap-7 flex-wrap">
           {
               vehicles.map((veh, index)=>{
                return (
                <div className="max-w-[300px] flex flex-col rounded-[1rem] mx-auto sm:mx-0 bg-white h-[360px]     shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-sm:max-w-[270px] card-details cursor-pointer" key={index}>
                <p className="font-bold mb-6 px-10 pt-6 max-xsm:pt-3">{veh.type}</p>
                <div className="px-10">
                  <img src={veh.image} alt={"img"}  className="mb-5 h-[200px] w-[340px] "/>
                  </div>
                 <div className="px-10 relative transition duration-[400ms] ease-in">
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
                      <div className="book-button opacity-0 card-show-details">
                          <span>View More</span>
                      </div>
                 </div>
              </div>
                )
               })
           }
      </section>
      <div className="fixed right-[20px] bottom-[50px] ">
        <CustomerCareIcon/>
        </div>
    </section>
  )
}

export default CarListPage