'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import sampleImg from '../../public/images/team-1.png'; // Replace with your image

const Ourwork = () => {
  const swiperRef = useRef(null);

  return (
    <section className='ourwork py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-3xl font-semibold mb-10'>Our latest work</h2>

        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src={sampleImg}
                  alt="Work example"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">Built a Coliving space booking platform for students and professionals</p>
                  <span className="text-xs font-semibold mt-2 block">Flat</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Repeat <SwiperSlide> for more items */}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="prev-btn absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
            ←
          </button>
          <button className="next-btn absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ourwork;
