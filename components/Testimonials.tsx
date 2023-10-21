"use client" 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { testimonials } from "@/constants";
import Image from "next/image";
import {BsStarFill} from 'react-icons/bs'
import {Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

export const Testimonials = () => {
  return (
<div id="testimonials" className="container pt-[100px] items-center mx-auto px-[60px]  max-xsm:px-[32px] max-xsm:max-w-xs">
        <h3 className="mb-1 text-[#494949] text-center text-sm">OUR REVIEWS</h3>
        <h2 className="text-[30px] text-center font-bold mb-12">Here What Our Clients Have To Say!</h2>
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
                 <motion.div
                 variants={fadeIn('down', user.delay)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false,amount:0.6}}            
                 className="page-transition max-w-[370px] p-6 max-xsm:p-3 flex flex-col gap-5 rounded-[1rem] mx-auto  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    <div className="flex ">{stars}</div>
                    <p className="text-gray-700 text-sm ">{user.reviews}</p>
                    <div className="flex gap-3">
                     <Image src={user.image} alt={"img"} width={50} height={50} className="mb-5 "/>
                     <div className="flex flex-col gap-1 text-sm items-center">
                        <span className="font-bold text-gray-700">{user.name}</span>
                        <span >{user.description}</span>
                     </div>
                  </div>
                 </motion.div>
                

             </SwiperSlide>
        })}

   </Swiper>
</div>
  )
}

