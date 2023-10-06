import { useForm } from 'react-hook-form';


interface Iprop {
     tripDetailObject?: {
        pick:'',
        drop:'',
        duration: '',
        distance: '',
        price: 0,
        vehicleType: ''
      }
  }

const TripDetailsForm:React.FC<Iprop> = ({tripDetailObject}) => {

    const { handleSubmit } = useForm();

    const handleSubmitForm = () =>{
        
    }
  return (
   <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white basis-[65%] h-[635px]'>
      <div className='bg-[#AED6EF] h-[50px] px-[20px] flex items-center'>
       <span className='font-semibold text-[20px]'>Booking Details</span>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='p-[20px]'>
         <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
             <div className='basis-1/2'>
                  <label>Full Name</label>
                  <input type="text" placeholder='Enter your full Name'/>
              </div>
              <div className='basis-1/2'>
                  <label>Mobile No.</label>
                  <input type='tel' placeholder='Enter your Mobile No.'/>
              </div>
         </div>
         <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
             <div className='basis-1/2'>
                  <label>Email</label>
                  <input type="email" placeholder='Enter your full Name'/>
                  <p className='text-[12px] text-[#6c757d]'>Booking confirmation will be sent to this email</p>
              </div>
              <div className='basis-1/2'>
                  <label>Flight Details</label>
                  <input type='tel' placeholder='Flight Details'/>
                  <p className='text-[12px]  text-[#6c757d]'>If your Booking is related to Airport pickup</p>
              </div>
         </div>
         <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
             <div className='basis-1/2'>
                  <label>Pickup Date:</label>
                  <input type="date" placeholder='Enter your full Name'/>
              </div>
              <div className='basis-1/2'>
                  <label>Pickup Time:</label>
                  <input type='time' placeholder='Flight Details'/>
              </div>
         </div>
         <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
             <div className='basis-1/2'>
                  <label>Pickup Address:</label>
                  <input type="text" 
                  placeholder='Address'
                  value={tripDetailObject?.pick}
                  readOnly
                  />
              </div>
              <div className='basis-1/2'>
                  <label>Drop Address:</label>
                  <input type='text' 
                  placeholder='Address'
                  value={tripDetailObject?.drop}
                  readOnly
                  />
              </div>
         </div>
         <div >
           <label className='text-sm'>Special Request:</label>
           <textarea className='textarea h-[70px] resize-none w-full ' placeholder='Add Note'/>
                  
        </div>
         <button type='submit' className='mt-5 book-button '> Confirm Booking</button>
      </form>
   </section>
  )
}

export default TripDetailsForm