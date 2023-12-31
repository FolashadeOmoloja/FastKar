import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { assignDriver, generateUniqueId } from '@/constants';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '@/app/api/firebase/config'
import { getSession } from "next-auth/react";
import { Session } from 'next-auth';


// Define validation rules for each form field
const validationRules = {
  fullName: {
    required: 'Full Name is required',
  },
  mobileNo: {
    required: 'Mobile No. is required',
    pattern: {
        value: /^[0-9]{11}$/, 
        message: 'Invalid mobile phone number',
      },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address',
    },
  },
  pickupDate: {
    required: 'Pickup Date is required',
  },
  pickupTime: {
    required: 'Pickup Time is required',
  },
};

interface Iprop {
  tripDetailObject?: {
    pick: string;
    drop: string;
    duration: string;
    distance: string;
    price: number;
    vehicleType: string;
  };
  propSecondUseState?: (value: boolean) => void;
  propThirdUseState?: (value: string) => void;
}

const TripDetailsForm: React.FC<Iprop> =  ({
  tripDetailObject,
  propSecondUseState,
  propThirdUseState,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const [userId,setUserId] = useState<any>()
//getSession and save as id

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




  //add Item to firebase
  const addItem = async (data:any) => {
   
    if (data) {
      const currentTimestamp = Date.now();
      const formattedDate = new Date(currentTimestamp).toLocaleDateString('en-GB');
      const driverAssigned = assignDriver()
       await addDoc(collection(db, 'items'), {
    fullName: data.fullName.trim(),
     mobileNo:  data.mobileNo.trim(), 
     email:  data.email.trim(), 
     flightDetails:  data.flightDetails.trim(), 
     pickupDate:  data.pickupDate.trim(),
     dropoffAddress:  data.dropoffAddress.trim(),
     pickupAddress:  data.pickupAddress.trim(),
     pickupTime:  data.pickupTime.trim(),
      specialRequest:  data.specialRequest.trim(),
      dateOfbooking: formattedDate,
      userId: userId,
      driverInfo:{
          driverImageSrc:driverAssigned.driverImageSrc,
          driverName:driverAssigned.driverName
      },
      vehicleType: tripDetailObject?.vehicleType,
      duration: tripDetailObject?.duration,
      price: tripDetailObject?.price,
      rating: 0
  }
    )
    if (propSecondUseState) {
      propSecondUseState(false);
    }
  
  }
  };

  const onSubmit = (data: any) => {

    // Handle form submission here
    const uniqueId = generateUniqueId();
    if (propThirdUseState) {
      propThirdUseState(uniqueId);
    }


    addItem(data)
  };

  return (
    <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white basis-[65%] h-[680px]'>
      <div className='bg-[#AED6EF] h-[50px] px-[20px] flex items-center'>
        <span className='font-semibold text-[20px]'>Booking Details</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='p-[20px]'>
        {/* Full Name */}
        <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
          <div className='basis-1/2'>
            <label>Full Name</label>
            <input
              type='text'
              placeholder='Enter your full Name'
              {...register('fullName', { required: validationRules.fullName.required })}
            />
            {errors.fullName && (
              <span className='text-red-500 text-sm'>{`${errors.fullName.message}`}</span>
            )}
          </div>
          {/* Mobile No. */}
          <div className='basis-1/2'>
            <label>Mobile No.</label>
            <input
              type='tel'
              placeholder='Enter your Mobile No.'
              {...register('mobileNo', { required: validationRules.mobileNo.required,
                pattern: validationRules.mobileNo.pattern,
              })}
            />
            {errors.mobileNo && (
              <span className='text-red-500 text-sm'>{`${errors.mobileNo.message}`}</span>
            )}
          </div>
        </div>
        {/* Email */}
        <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
          <div className='basis-1/2'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter your full Name'
              {...register('email', {
                required: validationRules.email.required,
                pattern: validationRules.email.pattern,
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>{`${errors.email.message}`}</span>
            )}
            <p className='text-[12px] text-[#6c757d]'>
              Booking confirmation will be sent to this email
            </p>
          </div>
          {/* Flight Details */}
          <div className='basis-1/2'>
            <label>Flight Details</label>
            <input
              type='tel'
              placeholder='Flight Details'
              {...register('flightDetails')}
            />
            <p className='text-[12px]  text-[#6c757d]'>
              If your Booking is related to Airport pickup
            </p>
          </div>
        </div>
        {/* Pickup Date and Time */}
        <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
          <div className='basis-1/2'>
            <label>Pickup Date:</label>
            <input
              type='date'
              {...register('pickupDate', { required: validationRules.pickupDate.required })}
            />
            {errors.pickupDate && (
              <span className='text-red-500 text-sm'>{`${errors.pickupDate.message}`}</span>
            )}
          </div>
          <div className='basis-1/2'>
            <label>Pickup Time:</label>
            <input
              type='time'
              {...register('pickupTime', { required: validationRules.pickupTime.required })}
            />
            {errors.pickupTime && (
              <span className='text-red-500 text-sm'>{`${errors.pickupTime.message}`}</span>
            )}
          </div>
        </div>
        {/* Pickup and Drop Address */}
        <div className='flex formdivs max-sm:flex-col mb-[20px] gap-[20px]'>
          <div className='basis-1/2'>
            <label>Pickup Address:</label>
            <input
              type='text'
              placeholder='Address'
              value={tripDetailObject?.pick}
              {...register('pickupAddress')}
              readOnly
            />
          </div>
          <div className='basis-1/2'>
            <label>Dropoff Address:</label>
            <input
              type='text'
              placeholder='Address'
              value={tripDetailObject?.drop}
              {...register('dropoffAddress')}
              readOnly
            />
          </div>
        </div>
        {/* Special Request */}
        <div>
          <label className='text-sm'>Special Request:</label>
          <textarea
            className='textarea h-[70px] resize-none w-full '
            placeholder='Add Note'
            {...register('specialRequest')}
          />
        </div>
        <button
          type='submit'
          className='mt-5 book-button'
          disabled={isSubmitting}
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
};

export default TripDetailsForm;


