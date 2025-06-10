'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Workimg from '../../public/images/work-img.png';
import '../../public/styles/ourwork.scss';
import { SliderLeftArrow } from '../common/sliderleft-arrow';
import { SliderRightArrow } from '../common/Sliderright-arrow';

const Ourwork = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="ourwork">
            {/* Heading inside container */}
            <div className="container mx-auto">
                <h2 className="text-center mb-8">Our latest work</h2>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={22}
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 1.05,
                    },
                    768: {
                        slidesPerView: 1.2,
                    },
                    1024: {
                        slidesPerView: 1.2,
                    },
                    1280: {
                        slidesPerView: 1.2,
                    },
                }}
                className="swiper-container work-swiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative rounded-xl overflow-hidden group">
                            <Image
                                src={Workimg}
                                alt="Work example"
                                className="w-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden z-10">
                                <div
                                    className={`h-full bg-[#4B22E0] transition-all duration-[6000ms] ease-linear ${activeIndex === i ? 'w-full' : 'w-0'
                                        }`}
                                ></div>
                            </div>

                            <div className="absolute bottom-0 px-3 md:px-[62px] pb-4 md:pb-8 text-white flex justify-between items-end w-full gap-4 flex-col md:flex-row">
                                <h3 className='white !text-base !md:text-[22px]'>
                                    Built a Coliving space booking platform <br /> for students and professionals
                                </h3>
                                <h3 className="white text-[22px]">Fllat</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <button className="prev-btn cursor-pointer absolute top-1/2 left-3 md:left-8 lg:left-24 transform -translate-y-1/2 bg-black/50 backdrop-blur-[14px] shadow p-2 lg:p-4 rounded-full z-10">
                    <SliderLeftArrow />
                </button>
                <button className="next-btn cursor-pointer absolute top-1/2 right-3 md:right-8 lg:right-24 transform -translate-y-1/2 bg-black/50 backdrop-blur-[14px] shadow p-2 lg:p-4 rounded-full z-10">
                    <SliderRightArrow />
                </button>
            </Swiper>
        </section>
    );
};

export default Ourwork;
