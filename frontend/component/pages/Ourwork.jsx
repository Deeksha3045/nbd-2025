'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Workimg from '../../public/images/work-img.png';
import "../../public/styles/ourwork.scss";
import { SliderLeftArrow } from '../common/sliderleft-arrow';
import { SliderRightArrow } from '../common/Sliderright-arrow';

const Ourwork = () => {
    const swiperRef = useRef(null);

    return (
        <section className="ourwork">
            {/* Heading only inside container */}
            <div className="container mx-auto">
                <h2 className="text-center mb-8">Our latest work</h2>
            </div>


            <Swiper
                modules={[Navigation]}
                spaceBetween={22}
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 1.05,
                    },
                    768: {
                        slidesPerView: 1.25,
                    },
                    1024: {
                        slidesPerView: 1.25,
                    },
                    1280: {
                        slidesPerView: 1.25,
                    }
                }}
                className="swiper-container work-swiper"
            >
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative rounded-xl overflow-hidden group">
                            <Image
                                src={Workimg}
                                alt="Work example"
                                className="w-full object-cover rounded-3xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
                            <div className="absolute bottom-4 px-6 md:px-[62px] pb-6 md:pb-8 text-white flex justify-between items-end w-full gap-4 flex-col md:flex-row">
                                <h3 className="white">
                                    Built a Coliving space booking platform for students and professionals
                                </h3>
                                <h3 className="white text-[22px]">Flat</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Navigation Arrows */}
                <button className="prev-btn absolute top-1/2 left-24 transform -translate-y-1/2  bg-black/50 backdrop-blur-[14px]shadow p-2 md:p-3 rounded-full z-10">
                    <SliderLeftArrow />
                </button>
                <button className="next-btn absolute top-1/2 right-24 transform -translate-y-1/2  bg-black/50 backdrop-blur-[14px] shadow p-2 md:p-3 rounded-full z-10">
                    <SliderRightArrow />
                </button>
            </Swiper>

        </section >
    );
};

export default Ourwork;
