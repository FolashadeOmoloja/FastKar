"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import GeoSearchComponent from './GeoSearch';



interface Iprop {

    handleAddressSubmit: () => Promise<void>;
    propUseState?: (value: string) => void; 
    propSecondUseState?: (value: string) => void; 
  }

const AutocompleteAddress:React.FC<Iprop> = ({ handleAddressSubmit, propUseState, propSecondUseState}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

  };


   //form 
   const { handleSubmit } = useForm();


  return (
    <section className=''>
      <section className={`flex justify-between text-[#2387FE] `}>
        <span className='text-lg '>Trip Details</span>
        <div className='mr-[20px] cursor-pointer flip text-[20px]' onClick={handleFlip}>
          <PiArrowsLeftRightBold />
        </div>
      </section>
      <section className='relative'>
        <div className='h-[105px] w-[10px] absolute top-[75px]'>
          <img src="/mapline.png" alt="" className='h-full w-full' />
        </div>
        <form  onSubmit={handleSubmit(handleAddressSubmit)} className={`pr-5 pl-3  text-gray-700 text-sm`}>
          <section className={`flex flex-col ${isFlipped ? 'flip' : ''} ${isFlipped ? 'flex-col-reverse' : ''}`}>
              <div className='relative flex flex-col mt-5'>
                <label className='mb-5 '>FROM</label>
                 <GeoSearchComponent propUseState={propUseState}/>
                <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
                  <HiOutlineLocationMarker />
                </span>
              </div>
              <div className='relative flex flex-col mt-5'>
                <label className='mb-5 '>TO</label>
                <GeoSearchComponent propUseState={propSecondUseState}/>
                <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
                  <HiOutlineLocationMarker />
                </span>
              </div>
          </section>
          <button type="submit" className='book-button mt-10 w-full'> Set Location </button>
        </form>
      </section>
    </section>
  );
};

export default AutocompleteAddress;
