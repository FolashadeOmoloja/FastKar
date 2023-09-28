"use client"
import { useState } from 'react';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


const AutocompleteAddress = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log('flipped')
  };

  return (
    <section className=''>
      <section className={`flex justify-between text-[#2387FE] `}>
        <span className='text-lg '>Trip Details</span>
        <div className='mr-[20px] cursor-pointer flip' onClick={handleFlip}>
          <PiArrowsLeftRightBold />
        </div>
      </section>
      <section className='relative'>
        <div className='h-[105px] w-[10px] absolute top-[55px]'>
          <img src="/mapline.png" alt="" className='h-full w-full' />
        </div>
        <section className={`pr-5 pl-3  text-gray-700 text-sm flex flex-col ${isFlipped ? 'flip' : ''} ${isFlipped ? 'flex-col-reverse' : ''}`}>
          <div className='relative flex flex-col mt-5'>
            <label className='mb-5 '>FROM</label>
            <input
              type="text"
              className='bg-transparent p-2 border-b border-gray-600 focus:outline-none'
              placeholder='address'
            />
            <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
              <HiOutlineLocationMarker />
            </span>
          </div>
          <div className='relative flex flex-col mt-5'>
            <label className='mb-5 '>TO</label>
            <input
              type="text"
              className='bg-transparent p-2 border-b border-gray-600 focus:outline-none'
              placeholder='address'
            />
            <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
              <HiOutlineLocationMarker />
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AutocompleteAddress;
