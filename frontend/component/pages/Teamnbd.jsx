'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Forward from '../../public/images/arrow_forward.svg';
import Backward from '../../public/images/arrow_back.svg';
import Team1 from '../../public/images/team-1.png';
import Team2 from '../../public/images/team-2.png';
import Team3 from '../../public/images/team-3.png';
import Team4 from '../../public/images/team-4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Teamnbd = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperWrapper = swiperRef.current?.querySelector('.swiper-wrapper');
        const nextButton = swiperRef.current?.querySelector('.team-swiper-next');
        const prevButton = swiperRef.current?.querySelector('.team-swiper-prev');

        if (swiperWrapper) {
            swiperWrapper.style.marginLeft = '9.5vw';

            nextButton?.addEventListener('click', () => {
                swiperWrapper.style.marginLeft = '0px';
            });

            prevButton?.addEventListener('click', () => {
                swiperWrapper.style.marginLeft = '9.5vw';
            });
        }
    }, []);

    return (
        <section className="team-nbd padding-120 !pt-0" ref={swiperRef}>
            <div className="container pb-[60px]">
                <div className="flex justify-between flex-col lg:flex-row  relative">
                    <div>
                        <div className="px-2 py-1.5 bg-[#4B22E014] w-max rounded-sm">
                            <p className="!text-[#74689E]">TEAM NBD</p>
                        </div>
                        <h2 className='mt-6'>Team that delivers success</h2>
                    </div>
                    <div className='flex gap-4 items-center justify-end'>
                        <div className="team-swiper-prev cursor-pointer">
                            <Image src={Backward} alt='Backward' />
                        </div>
                        <div className="team-swiper-next cursor-pointer">
                            <Image src={Forward} alt='Forward' /></div>
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                loop={false}
                grabCursor={true}
                spaceBetween={10}
                navigation={{
                    nextEl: '.team-swiper-next',
                    prevEl: '.team-swiper-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1.5, spaceBetween: 15 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 25 },
                    1280: { slidesPerView: 3.5, spaceBetween: 30 },
                    1800: { slidesPerView: 4.5, spaceBetween: 40 },
                }}
                className="teambottom"
            >
                {[Team1, Team2, Team3, Team4, Team1, Team2].map((img, i) => (
                    <SwiperSlide key={i}>
                        <Image src={img} alt={`Team ${i}`} className="w-full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Teamnbd;
