import {PiArrowsLeftRightBold} from 'react-icons/pi'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const AutocompleteAddress = () => {
  return (
    <section className=''>
        <section className='flex justify-between text-[#2387FE]'>
            <span className=' text-lg '>Trip Details</span>
            <div className='mr-[20px] cursor'>
                <PiArrowsLeftRightBold />
            </div>
        </section>
        {/* from */}
        <section className='pr-5 mt-5 text-gray-700 text-sm'>
             <div className='relative flex flex-col '>
                <label className=' mb-5 '>FROM</label>
                <input 
                  type="text" 
                  className='bg-transparent p-2 border-b border-gray-600 focus:outline-none'
                  placeholder='address'
                  
                  />
                  <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
                      <HiOutlineLocationMarker/>
                  </span>
              </div>
              <div className='relative flex flex-col mt-5'>
                <label className=' mb-5 '>TO</label>
                <input 
                  type="text" 
                  className='bg-transparent p-2 border-b border-gray-600 focus:outline-none'
                  placeholder='address'
                  
                  />
                  <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
                      <HiOutlineLocationMarker/>
                  </span>
              </div>
        </section>
    
    </section>
  )
}

export default AutocompleteAddress