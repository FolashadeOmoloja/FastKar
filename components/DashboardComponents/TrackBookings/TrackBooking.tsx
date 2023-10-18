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
import { useEffect } from 'react';

const TrackBooking = () => {
  

    // Read items from database
    useEffect(() => {
      const q = query(collection(db, 'items'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr: { id: string; }[] = [];
  
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        console.log(itemsArr)
        // return () => unsubscribe();
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