import { useForm } from 'react-hook-form';


interface Iprop {
     tripDetailObject?: object 
  }

const TripDetails:React.FC<Iprop> = ({tripDetailObject}) => {

    console.log(tripDetailObject)
  return (
   <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px]'>
      <div className='bg-[#f9f9f9] h-[50px] px-[20px] flex items-center'>
       <span className='font-semibold text-[20px]'>Booking Details</span>
      </div>
      <form action="">
          <div>

          </div>
      </form>
   </section>
  )
}

export default TripDetails