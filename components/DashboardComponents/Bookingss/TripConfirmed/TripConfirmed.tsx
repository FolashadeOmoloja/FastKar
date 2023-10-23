import {AiOutlineCheck} from 'react-icons/ai'
import { useRouter } from 'next/navigation'

interface Iprop{
    uniqueID?: string
}


const TripConfirmed:React.FC<Iprop> = ({uniqueID }) => {
  const router = useRouter();
  return (
    <section className='flex flex-col justify-center items-center gap-5 text-center'>
           <div>
              <img src="/cta.png" alt="img"  className='w-full h-full'/>
           </div>
           <p className='font-semibold sm:text-[30px] text-[18px]  flex items-center'>Booking Successful <span className='mx-1 max-md:hidden'><AiOutlineCheck/> </span> Your Ride Is On Its Way! </p>
           <span> Thank You For Booking With Us.</span>
            <span> We Have Received Your Booking Details Successfully. </span> 
            <p>Your Booking ID Is <span className='font-semibold'>"{uniqueID}"</span>, You Will Get An Email Invoice Soon!</p> 
             <span>Your Driver Details Will Be Updated Shortly.</span>
             <span>Payment would be sorted out on site</span>
             <button className='book-button' onClick={()=>router.push('/dashboard/track-bookings')}>Track Booking</button>
           
        
    </section>
  )
}

export default TripConfirmed