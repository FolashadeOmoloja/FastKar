import { DriverData } from "@/constants"

const Riders = () => {
  return (
    <section>
        
      <div className="flex justify-between mb-7 font-semibold">
         <h3 className='text-[20px] '>FastKar Drivers</h3>
         <p className='text-sm max-sm:hidden'>Know who's driving you</p>
      </div>
      <section className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
             {
                DriverData.map((veh,index)=>{
                    return(
                        <section key={index} className="flex p-2 w-[450px] max-lg:flex-col max-xlg:w-[340px] bg-white max-md:w-[290px] max-xsm:w-[280px]">
                             <div className="basis-1/2 h-full bg-bluegradient flex items-center justify-center">
                                <img src={veh.image} alt="driver" className="w-full h-full" />
                             </div>   
                             <div className="flex flex-col gap-2 basis-1/2 p-3">
                                 {/* <p className=" bg-gray-200">FastKar</p> */}
                                 <span className="bg-bluegradient py-2 text-white">{veh.name}</span>
                                 <p>{veh.description}</p>
                                 <p>{veh.qualifications}</p>
                                 <button className="border-b bg-transparent">View More</button>
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