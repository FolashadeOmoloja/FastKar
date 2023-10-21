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
import StarRating from './StarRating';
import { BsFillTrashFill, BsStar, BsStarFill } from 'react-icons/bs';


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
       price: '',
       rating: 0,
       id:''
    }
  ])
  //modal
  const [modal,setModal]=useState(false)
  const [activeModal, setActiveModal] = useState(-1);



  //routing
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
        let bookingArr: {
          [x: string]: any; id: string; 
        }[] = [];
        itemsArr.forEach((item)=>{
          if(session?.user?.email  == item?.userId){
            bookingArr.push(item)
          }
        })
        setBookingHistory(bookingArr as [])
        setBookingArray(bookingArr as [])
      });
    
      // Return a function to unsubscribe from the listener when the component unmounts
      return () => unsubscribe();
    }, []);


        //delete an item
        const deleteItem = async(tripId:string) =>{
          const docRef = doc(db, "items", tripId as string);
          await deleteDoc(docRef);

        }
    
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
                                 //stars rating
                                const rating = item.rating;
                                const stars = [];
                                for (let i = 0; i < 5; i++) {
                                  if (i < rating) {
                                    stars.push(<BsStarFill key={i} color="#2387FE" fontSize='14px' />);
                                  } else {
                                    stars.push(<BsStar key={i} color="#2387FE" fontSize='14px' />);
                                  }
                                }
                              
                                return (
                                  <div  className='rounded-lg w-full p-5 bg-[#AED6EF] '  key={index} >
                                  <div className=' flex justify-between max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:text-center'>
                                  <div className='text-sm flex flex-col basis-1/2 justify-between max-sm:gap-3'>
                                      <p className='font-bold text-[16px]'>Driver Info</p>
                                  <   div className='w-[200px] h-[200px]  bg-white rounded-lg'>
                                         <img src={item?.driverInfo?.driverImageSrc } alt="driver img" className='w-full h-full'/>
                                      </div> 
                                      <p className='font-semibold'>Name: {item?.driverInfo?.driverName}</p> 
                                      <div className='flex gap-1 items-center max-sm:justify-center'>
                                          <span className='font-semibold'>Ratings:</span>
                                          <div className='flex gap-1'>{stars}</div>
                                      </div>                                 
                                  </div>
                                  <div className='text-sm basis-1/2 flex flex-col gap-3'>
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
 
                                </div>
                                <div className='mt-5'>
                                  <div className='p-3 bg-bluegradient text-white flex justify-between border rounded-sm font-bold items-center max-xsm:text-sm'>
                                   <span className=' cursor-pointer ' onClick={()=>{setActiveModal(index);setModal(true)}} >Rate Your Trip</span>
                                   <span className='cursor-pointer flex items-center ' onClick={()=>deleteItem(item.id)}><BsFillTrashFill/> <span className='max-xsm:hidden'>Delete History</span></span>
                                  </div>
                                  {activeModal === index && (
                                    <StarRating propUseState={setModal}  modal={modal} propSecondUseState={setActiveModal} tripId={item.id}/>
                                  )}

                                </div>
                                </div>
                          
) 
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