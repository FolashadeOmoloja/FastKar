"use client" 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { testimonials } from "@/constants";
import Image from "next/image";
import {BsStarFill} from 'react-icons/bs'
import { Autoplay,Navigation } from 'swiper/modules';

export const Testimonials = () => {
  return (
<div id="testimonials" className="container mx-auto px-[60px] max-md:px-[20px] max-sm:px-0 max-xsm:max-w-xs">
   <Swiper
   breakpoints={{
    320: {slidesPerView:1, spaceBetween:15},
    640: {slidesPerView: 2, spaceBetween: 32},
    1240: {slidesPerView: 3, spaceBetween: 32}
   }}   
    navigation={true}
    grabCursor={true}
    modules={[Navigation]} 
    className="mySwiper"
    >
    {
        testimonials.map((user, index) =>{
          const stars = [];
          for (let i = 0; i < 5; i++) {
            stars.push(<BsStarFill key={i} color="#29AFFD" fontSize='14px' />)
          }


             return <SwiperSlide key={index}>
                 <div className="max-w-[370px] p-6 flex flex-col gap-5 rounded-[1rem] mx-auto  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    <div className="flex ">{stars}</div>
                    <p className="text-gray-700 text-sm ">{user.reviews}</p>
                    <div className="flex gap-3">
                     <Image src={user.image} alt={"img"} width={50} height={50} className="mb-5 "/>
                     <div className="flex flex-col gap-1 text-sm items-center">
                        <span className="font-bold text-gray-700">{user.name}</span>
                        <span >{user.description}</span>
                     </div>
                  </div>
                 </div>
                

             </SwiperSlide>
        })}

   </Swiper>
</div>
  )
}

