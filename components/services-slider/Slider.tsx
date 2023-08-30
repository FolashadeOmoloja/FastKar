"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { vehicles } from "@/constants";
import Image from "next/image";
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Slider = () => {
  return (
<div className="container mx-auto px-[60px] max-md:px-[20px] max-sm:px-0 max-xsm:max-w-xs">
   <Swiper
         autoplay={{
          delay: 3000, // Adjust the delay as needed (in milliseconds)
          disableOnInteraction: false, // Continue autoplay even when user interacts
       }}
 
   breakpoints={{
    320: {slidesPerView:1, spaceBetween:15},
    640: {slidesPerView: 2, spaceBetween: 32},
    1240: {slidesPerView: 3, spaceBetween: 32}
   }}   
    enabled={true}>
    {
        vehicles.map((veh, index) =>{

          const rating = veh.star;
          const integerPart = Math.floor(rating);
          const decimalPart = rating - integerPart;
          const stars = [];

          for (let i = 0; i < 5; i++) {
            if (i < integerPart) {
              stars.push(<BsStarFill key={i} color="#29AFFD" fontSize='14px' />);
            } else if (i === integerPart && decimalPart >= 0.3 && decimalPart <= 0.7) {
              stars.push(<BsStarHalf key={i} color="#29AFFD" fontSize='14px' />);
            } else {
              stars.push(<BsStar key={i} color="#29AFFD" fontSize='14px' />);
            }
          }


             return <SwiperSlide key={index}>
                 <div className="max-w-[350px] flex flex-col rounded-[1rem] mx-auto sm:mx-0 bg-white h-[450px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-sm:max-w-[270px]">
                     <p className="font-bold mb-6 px-10 pt-6 max-xsm:pt-3">{veh.type}</p>
                     <div className="px-10">
                     <Image src={veh.image} alt={"img"} width={300} height={200} className="mb-5 h-[200px] w-[340px] "/>
                     </div>

                  <div className="flex justify-between px-10">
                  <div className="flex">{stars}</div>
                  <span className="text-gray-700 text-sm ">{veh.reviews}</span>
                  </div>
                  <p className="mt-3 px-10">{veh.description}</p>
                  <button className="w-full h-[65px] rounded-b-[1rem] bg-bluegradient mt-3 text-white font-semibold bg-200% hover:bg-right-center transition-[background] duration-[400ms] ease-in-out ">
                      Book Ride
                  </button>
                 </div>
                

             </SwiperSlide>
        })}

   </Swiper>
</div>
  )
}

export default Slider