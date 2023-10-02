"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


interface Iprop {
    handleAddressChange?: (value: any) => any;
    addressFrom?: any;
    addressTo?: any;
    handleAddressSubmit: () => Promise<void>;
  }

const AutocompleteAddress:React.FC<Iprop> = ({addressFrom, addressTo, handleAddressChange, handleAddressSubmit}) => {
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
        <form  onSubmit={handleSubmit(handleAddressSubmit)} className={`pr-5 pl-3  text-gray-700 text-sm flex flex-col ${isFlipped ? 'flip' : ''} ${isFlipped ? 'flex-col-reverse' : ''}`}>
          <div className='relative flex flex-col mt-5'>
            <label className='mb-5 '>FROM</label>
            <input
              type="text"
              className='bg-transparent p-2 border-b border-gray-600 outline-none focus:border-[#2387FE]'
              name="addressFrom"
              value={addressFrom}
              onChange={handleAddressChange}
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
              className='bg-transparent p-2 border-b border-gray-600 outline-none focus:border-[#2387FE]'
              name="addressTo"
              value={addressTo}
              onChange={handleAddressChange}
              placeholder='address'
            />
            <span className='absolute right-0 top-[45px] text-[#2387FE] text-[20px] '>
              <HiOutlineLocationMarker />
            </span>
          </div>
          <button type="submit" className='book-button mt-10'> Set Location </button>
        </form>
      </section>
    </section>
  );
};

export default AutocompleteAddress;
