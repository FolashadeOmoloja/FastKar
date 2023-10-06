import { useForm } from 'react-hook-form';
import TripDetailsForm from './TripDetailsForm';
import TripCards from './TripCards';


interface Iprop {
     tripDetailObject?: {
        pick:'',
        drop:'',
        duration: '',
        distance: '',
        price: 0,
        vehicleType: '',
        vehImg: ''
      }
      propUseState?: (value: boolean) => void; 
      propSecondUseState?: (value: boolean) => void; 
      propThirdUseState?: (value: string) => void; 
  }

const TripDetails:React.FC<Iprop> = ({tripDetailObject, propUseState, propSecondUseState,propThirdUseState}) => {

    const handleClick = () =>{
          if(propUseState){
            propUseState(true)
          }
    }


  return (
         <section>
           <section className='flex gap-[20px] max-xl:flex-col'>
           <TripDetailsForm tripDetailObject={tripDetailObject} 
           propSecondUseState={propSecondUseState}
           propThirdUseState={propThirdUseState}
           />
           <TripCards 
           distance={tripDetailObject?.distance}
           duration={tripDetailObject?.duration}
           vehicle={tripDetailObject?.vehicleType}
           price={tripDetailObject?.price}
           imageSrc={tripDetailObject?.vehImg}
           />
       
   </section>
         <div className='flex w-full justify-center mt-4'>
             <button className='book-button min-w-[200px] max-xsm:w-full'
             onClick={() => handleClick()}
             >Go Back To Booking</button>
         </div>
         </section>
  )
}

export default TripDetails