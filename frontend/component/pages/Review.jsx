'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Reviewimg from '../../public/images/review-img.svg';
import Forward from '../../public/images/arrow_forward.svg';
import Backward from '../../public/images/arrow_back.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Review = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperWrapper = swiperRef.current?.querySelector('.swiper-wrapper');
        const nextButton = swiperRef.current?.querySelector('.review-swiper-next');
        const prevButton = swiperRef.current?.querySelector('.review-swiper-prev');

        if (swiperWrapper && nextButton && prevButton) {
            swiperWrapper.style.marginLeft = '9.5vw';

            const handleNextClick = () => {
                swiperWrapper.style.marginLeft = '0px';
            };

            const handlePrevClick = () => {
                swiperWrapper.style.marginLeft = '9.5vw';
            };

            nextButton.addEventListener('click', handleNextClick);
            prevButton.addEventListener('click', handlePrevClick);

            return () => {
                nextButton.removeEventListener('click', handleNextClick);
                prevButton.removeEventListener('click', handlePrevClick);
            };
        }
    }, []);

    return (
        <section className="reviews padding-120 pt-0" ref={swiperRef}>
            <div className="container pb-[60px]">
                <div className="flex justify-between flex-col lg:flex-row relative">
                    <div>
                        <div className="px-2 py-1.5 bg-[#4B22E014] w-max rounded-sm">
                            <p className="!text-[#74689E]">REVIEWS</p>
                        </div>
                        <h2 className="mt-6">What our clients says about us</h2>
                    </div>
                    <div className="flex gap-4 items-center justify-end">
                        <div className="review-swiper-prev cursor-pointer">
                            <Image src={Backward} alt="Backward" />
                        </div>
                        <div className="swiper-pagination !relative !w-auto !bottom-0 text-lg text-[#3D3D3D] font-normal"></div>
                        <div className="review-swiper-next cursor-pointer">
                            <Image src={Forward} alt="Forward" />
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={20}
                grabCursor={true}
                pagination={{ type: 'fraction', el: '.swiper-pagination' }}
                navigation={{
                    nextEl: '.review-swiper-next',
                    prevEl: '.review-swiper-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2.5, spaceBetween: 20 },
                    1280: { slidesPerView: 3.5, spaceBetween: 20 },
                }}
                className="reviewswiper"
            >
                {[...Array(5)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#F0F2FA] rounded-2xl p-8">
                            <p className="bold">ELECTRIC ONE</p>
                            <h4 className="grey my-8">
                                “Since 2022, Noseberry has managed all our creative work with reliability and excellence, consistently delivering high-quality design creatives & printables for all our projects.”
                            </h4>
                            <div className="flex items-center gap-[22px]">
                                <Image src={Reviewimg} alt="Review" />
                                <div>
                                    <p className="semi-bold mb-1">Gui Paradix</p>
                                    <p className="grey">Co-Founder</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;
