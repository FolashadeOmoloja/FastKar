"use client"
import {
  collection,
  getDoc,
  QuerySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import {db} from '@/app/api/firebase/config'
import { useEffect, useState } from 'react';
import { getSession } from "next-auth/react";
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';


const TrackBooking = () => {
    
  const [userId,setUserId] = useState<any>()
  const [bookingArray, setBookingArray] = useState([])
  const [bookingHistory, setBookingHistory] = useState([
    {
      fullName: '',
      mobileNo:  '', 
      email:  '', 
      flightDetails: '', 
      pickupDate: '',
      dropoffAddress:  '',
      pickupAddress:  '',
      pickupTime: '',
       specialRequest:'' ,
       dateOfbooking: '',
       driverInfo:{
           driverImageSrc:'',
           driverName:''
       },
       vehicleType: '',
       duration: '',
       price: ''
    }
  ])
  const bookingArr: { [x: string]: any; id: string; }[] = []
  const sample=[]
  const router = useRouter();
  const handleClick = () => {
      router.push('/dashboard/bookings');
    };
   //getSession
   let session: Session | {user: any} |null;

   const getTheSession = async () => {
    return new Promise(async (resolve) => {
      session = await getSession();
      resolve(session);
    });
  };
  
  useEffect(() => {
    getTheSession().then((session) => {
      if (session) {
        const userEmail = (session as { user: any })?.user?.email;
        setUserId(userEmail ?? 'defaultEmail');
      }
    });
  }, []);
  console.log(userId)
  
  
  

    // Read items from database
    useEffect(() => {
      const q = query(collection(db, 'items'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr: {
          [x: string]: any; id: string; 
}[] = [];
  
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        itemsArr.forEach((item)=>{
             if(session?.user?.email  == item?.userId){
              bookingArr.push(item)
             }
        })
        setBookingHistory(bookingArr as [])
        setBookingArray(bookingArr as [])
      
      });
      return () => unsubscribe();
    }, []);
    console.log(bookingHistory)
    //romans 5:15
  return (
        <section>
             <h3 className="text-[30px] font-semibold text-[#2387FE]">Track Bookings</h3>
             <span className="text-sm mb-5 font-semibold">Keep track of your bookings!</span>
             <section>
                  <section>
                       {
                        bookingArray.length>=1?(
                          <section className='flex flex-col gap-8 mt-8'>
                            {
                              bookingHistory.map((item,index)=>{
                                
                              
                                return (
                                 <div className='rounded-lg w-full p-5 bg-[#AED6EF] flex justify-between' key={index} >
                                  <div className='text-sm flex flex-col gap-3'>
                                      <p className='font-bold text-[16px]'>Driver Info</p>
                                  <   div className='w-[100px] h-[100px] bg-white rounded-lg'>
                                         <img src={item?.driverInfo?.driverImageSrc } alt="" className='w-full h-full'/>
                                      </div> 
                                      <p className='font-semibold'>Name: {item?.driverInfo?.driverName}</p>                                  
                                  </div>
                                  <div className='text-sm flex flex-col gap-3'>
                                      <span className='font-bold text-[16px]'>Customer Details</span>
                                      <span className='font-semibold'>Name: <span className='font-normal'>{item.fullName}</span></span>
                                      <span className='font-semibold'>Pickup Address: <span className='font-normal'>{item.pickupAddress}</span></span>
                                      <span className='font-semibold'>Drop-Off Address: <span className='font-normal'>{item.dropoffAddress}</span></span>
                                      <span className='font-semibold'>Vehicle Type: <span className='font-normal'>{item.vehicleType}</span> </span>
                                      <span className='font-semibold'>Special Request: <span className='font-normal'>{item.specialRequest==''?'Nil':item.specialRequest}</span> </span>
                                      <span className='font-semibold'>Flight Details: <span className='font-normal'>{item.flightDetails==''?'Nil':item.flightDetails}</span> </span>
                                      <span className='font-semibold'>Date of Booking: <span className='font-normal'>{item.dateOfbooking}</span> </span>
                                      <span  className='font-semibold'>Total Fare: <span className='font-semibold'></span>&#8358; {item.price ? (Number(item.price) + 120).toFixed(2) : '0.00'}</span>

                                  </div>
 
                                </div>)
                              })
                            }
                          </section>
                        ): (
                          <div className='flex flex-col text-center items-center justify-center mt-[10px]'>
                                <div><img src="/CTA.png" alt="img"  className='w-full h-full'/></div>
                                <span className="text-[20px] font-semibold text-[#2387FE]">Your Booking History is empty at the moment</span>
                                <button className='book-button sm:w-[200px] mt-5' onClick={()=>{ handleClick()}}>Start Booking</button>
                          </div>
                        )
                       }
                  </section>
             </section>
        </section>
  )
}

export default TrackBooking