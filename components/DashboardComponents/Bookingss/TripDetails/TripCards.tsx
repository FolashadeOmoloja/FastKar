import Image from 'next/image'
interface Iprop {
       distance?: string,
       duration?: string
       vehicle?: string
       price?: number
       imageSrc?: string
 }

const TripCards:React.FC<Iprop> = ({distance,duration, vehicle, price, imageSrc}) => {
  return (
   <section className="flex flex-col max-xl:flex-row max-md:flex-wrap gap-5 basis-[35%]">
       <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white  w-full">
          <div className='bg-[#AED6EF] h-[50px] px-[20px] flex items-center'>
          <span className='font-semibold text-[20px]'>Booking Summary</span>
          </div>
          <div className="p-[20px]">
              <ul>
                 <li className="flex justify-between text-sm">
                    <span>Distance</span>
                    <span>{distance}</span>
                </li>
                <li className="flex justify-between text-sm">
                    <span>Duration</span>
                    <span>{duration}</span>
                </li>                 <li className="flex justify-between text-sm">
                    <span>Vehicle Type</span>
                    <span>{vehicle}</span>
                </li>
                <li className="flex justify-between text-sm">
                    <span>Base Price</span>
                    <span>&#8358; {price}</span>
                </li>
                <li className="flex justify-between text-sm">
                    <span>Toll Tax</span>
                    <span>&#8358; 120</span>
                </li>
                <li className="flex justify-between text-sm">
                    <span>Inter-State Tax</span>
                    <span>&#8358; 0.00</span>
                </li>

              </ul>
              <div className="flex justify-between mt-5 bg-[#AED6EF] p-2">
                 <span>Total Fare</span>
                 <span>&#8358; {price ? (Number(price) + 120).toFixed(2) : '0.00'}</span>

              </div>
          </div>
       </section>
       <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white  w-full">
          <div className='bg-[#AED6EF] h-[50px] px-[20px] flex items-center'>
          <span className='font-semibold text-[20px]'>Booking Summary</span>
          </div>
          <div className="p-[20px] text-sm flex flex-col gap-2">
          <span>All Inclusive Fixed Fare </span>
           <span>No Advance Payment Requirement</span>
           <span>Zero Cancellation Charge</span>
           <span>Full Refund In Case Of Cancellation Of Online Prepaid Trip</span>
           <span>Book Up To 8 Days In Advance</span>
          </div>
       </section>
       <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white  w-full flex items-center h-[250px] max-xl:h-[300px]">
               <img src={imageSrc} alt="image" className='w-full h-full'/>
       </section>
   </section>
  )
}

export default TripCards