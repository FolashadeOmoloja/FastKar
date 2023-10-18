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

const TrackBooking = () => {
    
  const [userId,setUserId] = useState<any>()
  const [bookingHistory, setBookingHistory] = useState([])

   //getSession
   let session: Session | {user: any} |null;

const getTheSession = async () => {
  return new Promise(async (resolve) => {
    session = await getSession();
    resolve(session);
  });
};

useEffect(() => {
  getTheSession()
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
          console.log(item?.userId)
             if(session?.user?.email  == item?.userId){
              console.log('hi')
             }
        })
        // console.log(itemsArr)
      
      });
    }, []);
  return (
        <section>
             <h3 className="text-[30px] font-semibold text-[#2387FE]">Track Bookings</h3>
             <span className="text-sm mb-5 font-semibold">Keep track of your bookings!</span>
             <section>
                  <section>
                       
                  </section>
             </section>
        </section>
  )
}

export default TrackBooking