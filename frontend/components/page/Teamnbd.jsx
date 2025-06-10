'use client'
import React from 'react'
import Image from 'next/image';
import "../../public/styles/client.scss";
import Team1 from '../../public/images/team-1.png';
import Team2 from '../../public/images/team-2.png';
import Team3 from '../../public/images/team-3.png';
import Team4 from '../../public/images/team-4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const Teamnbd = () => {
    return (
        <div className='team-nbd padding-120 pt-0'>
            <div className="container pb-[60px]">
                <div className='px-2 py-1.5 bg-[#4B22E014] w-max rounded-sm'>
                    <p className='!text-[#74689E]'>TEAM NBD</p>
                </div>
                <h2 className='mt-6'>Team that delivers success</h2>
            </div>
            <Swiper
                spaceBetween={15}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={2000}
                breakpoints={{
                    320: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3.5 },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={Team1} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team2} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team3} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team4} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team1} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team2} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team3} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team4} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team1} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team2} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team3} alt="Team" className="w-full" /></SwiperSlide>
                <SwiperSlide><Image src={Team4} alt="Team" className="w-full" /></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Teamnbd
