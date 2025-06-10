'use client'
import React from 'react'
import "../../public/styles/client.scss";
import Image from 'next/image'
import Apolo from '../../public/images/apolo.svg';
import Nivabupa from '../../public/images/nivabupa.svg';
import Amway from '../../public/images/amway.svg';
import Bp from '../../public/images/bp.svg';
import Zeiss from '../../public/images/zeiss.svg';
import Volovo from '../../public/images/volvo.svg';
import Mahagun from '../../public/images/mahagun.svg';
import Spectrum from '../../public/images/spectrum-metro.svg';
import Rise from '../../public/images/rise.svg';
import Gulshan from '../../public/images/gulshan.svg';
import Bhutani from '../../public/images/bhutani.svg';
import Careerflow from '../../public/images/careerflow.svg';
import Moneyclub from '../../public/images/moneyclub.svg';
import Fibonacci from '../../public/images/fibonacci.svg';
import Vrddi from '../../public/images/vrddi.svg';
import Ashawnillc from '../../public/images/ashwanillc.svg';
import Galaxy from '../../public/images/galaxy.svg';
import Swaasdee from '../../public/images/swaasdee.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Client = () => {
    return (
        <div className='client-slider padding-120'>
            <div className='container'>
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 6 },
                        1280: { slidesPerView: 7 },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image src={Apolo} alt="Apolo" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Nivabupa} alt="Nivabupa" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Amway} alt="Amway" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Bp} alt="Bp" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Zeiss} alt="Zeiss" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Volovo} alt="Volovo" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Mahagun} alt="Mahagun" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Spectrum} alt="Spectrum" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Rise} alt="Rise" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Gulshan} alt="Gulshan" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Bhutani} alt="Bhutani" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Careerflow} alt="Careerflow" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Moneyclub} alt="Moneyclub" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Fibonacci} alt="Fibonacci" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Vrddi} alt="Vrddi" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Ashawnillc} alt="Ashwanillc" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Galaxy} alt="Galaxy" className="w-full" /></SwiperSlide>
                    <SwiperSlide><Image src={Swaasdee} alt="Swaasdee" className="w-full" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Client
