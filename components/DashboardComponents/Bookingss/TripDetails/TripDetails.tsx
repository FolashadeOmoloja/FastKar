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

const TripDetails:React.FC<Iprop> = ({tripDetailObject}) => {

    console.log(tripDetailObject)
  return (
   <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white'>
      <div className='bg-[#AED6EF] h-[50px] px-[20px] flex items-center'>
       <span className='font-semibold text-[20px]'>Booking Details</span>
      </div>
      <form action="" className='p-[20px]'>
         <div className='flex formdivs mb-[20px] gap-[20px]'>
             <div>
                  <label>Full Name</label>
                  <input type="text" placeholder='Enter your full Name'/>
              </div>
              <div>
                  <label>Mobile No.</label>
                  <input type='tel' placeholder='Enter your Mobile No.'/>
              </div>
         </div>
         <div className='flex formdivs mb-[20px] gap-[20px]'>
             <div>
                  <label>Email</label>
                  <input type="email" placeholder='Enter your full Name'/>
                  <p className='text-[12px] text-[#6c757d]'>Booking confirmation will be sent to this email</p>
              </div>
              <div>
                  <label>Flight Details</label>
                  <input type='tel' placeholder='Flight Details'/>
                  <p className='text-[12px]  text-[#6c757d]'>If your Booking is related to Airport pickup</p>
              </div>
         </div>
         <div className='flex formdivs mb-[20px] gap-[20px]'>
             <div>
                  <label>Pickup Date:</label>
                  <input type="date" placeholder='Enter your full Name'/>
              </div>
              <div>
                  <label>Pickup Time:</label>
                  <input type='time' placeholder='Flight Details'/>
              </div>
         </div>
         <div className='flex formdivs mb-[20px] gap-[20px]'>
             <div>
                  <label>Pickup Address:</label>
                  <input type="text" 
                  placeholder='Address'
                  value={tripDetailObject?.pick}
                  />
              </div>
              <div>
                  <label>Drop Address:</label>
                  <input type='text' 
                  placeholder='Address'
                  value={tripDetailObject?.drop}
                  />
              </div>
         </div>
         <div >
           <label className='text-[12px]'>Drop Address:</label>
           <textarea className='resize-none w-full h-[100px] rounded-lg border border-[#ced4da] px-[6px] py-[12px]' placeholder='Add Note'/>
                  
        </div>
         <button type='submit' className='mt-5 book-button '> Confirm Booking</button>
      </form>
   </section>
  )
}

export default TripDetails