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
  const [bookingHistory, setBookingHistory] = useState([])
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
      setUserId((session as { user: any }).user?.email ?? 'defaultEmail');
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
        itemsArr.forEach((item)=>{
             if(session?.user?.email  == item?.userId){
              bookingArr.push(item)
             }
        })
        setBookingHistory(bookingArr as [])
      
      });
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
                        sample.length>=1?(
                          <section>
                            {
                              bookingHistory.map(()=>{
                                return (
                                 <div>

                                </div>)
                              })
                            }
                          </section>
                        ): (
                          <div className='flex flex-col items-center justify-center mt-[10px]'>
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