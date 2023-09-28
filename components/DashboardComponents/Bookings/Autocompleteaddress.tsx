import {PiArrowsLeftRightBold} from 'react-icons/pi'

const AutocompleteAddress = () => {
  return (
    <section>
        <section className='flex justify-between'>
            <span>Trip Details</span>
            <div>
                <PiArrowsLeftRightBold/>
            </div>
        </section>
        {/* from */}
        <section className=''>
             <div className='relative flex flex-col'>
                <label>From</label>
                <input 
                  type="text" 
                  className=''
                  value={'address'}
                  />
              </div>
        </section>
    
    </section>
  )
}

export default AutocompleteAddress