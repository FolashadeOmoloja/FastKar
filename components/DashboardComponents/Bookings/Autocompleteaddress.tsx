"use client"
import { useState, useEffect } from 'react';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


interface Iprop {

  }

const AutocompleteAddress:React.FC<Iprop> = ({}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [source, setSource] = useState<any>()
  const [addressList, setAddressList] = useState<any>([])
  useEffect(()=>{
    const delayDebounceFn=  setTimeout(()=>{
        getAddressList()
    },1000)
     //clears time for next iteration
    return () => clearTimeout(delayDebounceFn)  
  },[source])

  const getAddressList =async () =>{
    const res = await fetch ('/api/search-address?q='+source,{
        headers:{
            "Content-Type": "application/json"
        }
    });
    const result=await res.json();
    setAddressList(result)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

  };






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
        <form  className={`pr-5 pl-3  text-gray-700 text-sm flex flex-col ${isFlipped ? 'flip' : ''} ${isFlipped ? 'flex-col-reverse' : ''}`}>
          <div className='relative flex flex-col mt-5'>
            <label className='mb-5 '>FROM</label>
            <input
              type="text"
              className='bg-transparent p-2 border-b border-gray-600 outline-none focus:border-[#2387FE]'
              name="addressFrom"
              value={source}
              placeholder='address'
              onChange={(e) => setSource(e.target.value)}
            />
                        {addressList?.suggestions?
            <div className='shadow-md p-1 rounded-md
             w-full bg-white z-20'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
             >{item.full_address} hi</h2>
            ))}
           </div>:null}
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
              onChange={(e) => setSource(e.target.value)}
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
