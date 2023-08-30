import Image from 'next/image'
import { servicesArr } from '@/constants/constants'
const ServiceDetails = () => {
  return (
    <section className="flex justify-between p-[50px]">
         <div className="bg-[url('/ringbg.png')] bg-cover flex flex-col ">
            <Image src={'/blue.png'} alt={''} width={700} height={600} className='w-full h-full'/>
         </div>
         <div>
            <h4 className="mb-1 text-[#494949] text-lg">Explore  our first class services</h4>
            <p className="text-[30px] font-bold mb-12">Unlock an Exceptional Journey <br /> with Our Taxi Booking Services</p>
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