import { DriverData } from "@/constants"

const Riders = () => {
  return (
    <section>
        
      <div className="flex justify-between mb-7 font-semibold">
         <h3 className='text-[20px] '>FastKar Drivers</h3>
         <p className='text-sm max-sm:hidden text-[#2387FE] '>Know who's driving you</p>
      </div>
      <section className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
             {
                DriverData.map((veh,index)=>{
                    return(
                        <section key={index} className="flex p-2 w-[450px] max-xlg:flex-col max-xlg:text-center max-xlg:items-center max-xlg:w-[330px] bg-white max-md:w-[290px] max-xsm:w-[280px]">
                             <div className="basis-1/2 h-full bg-bluegradient flex items-center justify-center">
                                <img src={veh.image} alt="driver" className="w-full h-full" />
                             </div>   
                             <div className="flex flex-col gap-1 basis-1/2 p-3">
                                 {/* <p className=" bg-gray-200">FastKar</p> */}
                                 <span className="bg-bluegradient p-2 text-white">{veh.name}</span>
                                 <span>{veh.description}</span>
                                 <span className="text-[#2387FE] ">Qualifications:</span>
                                 <span>{veh.qualifications[0]}</span>
                                 <span>{veh.qualifications[1]}</span>
                                <div className="mt-auto"><span className="border-b border-[#2387FE] w-[80px] text-[#2387FE] ">View More</span></div>
                            </div>  
                        </section>
                    )
                })
             }

      </section>
    </section>
  )
}

export default Riders