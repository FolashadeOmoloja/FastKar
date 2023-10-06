import {AiOutlineCheck} from 'react-icons/ai'

interface Iprop{
    uniqueID?: string
}


const TripConfirmed:React.FC<Iprop> = ({uniqueID}) => {
  return (
    <section className='flex flex-col justify-center items-center'>
           <div>
              <img src="/CTA.png" alt="img"  className='w-full h-full'/>
           </div>
           <p className='font-semibold text-[20px]'>Booking Successful <AiOutlineCheck/> Your Ride Is On Its Way! </p>
           <span> Thank You For You Booking.</span>
            <span> We Have Received Your Booking Successfully. </span> 
            <p>Your Booking ID Is <span className='font-semibold'>"{uniqueID}"</span>, You Will Get An Email Invoice Soon!</p> 
             <span>Your Driver Details Will Be Updated Shortly.</span>
             <span>Payment would be sorted out on site</span>
           
        
    </section>
  )
}

export default TripConfirmed