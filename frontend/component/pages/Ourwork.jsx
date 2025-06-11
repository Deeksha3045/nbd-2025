'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../public/styles/ourwork.scss';
import { SliderLeftArrow } from '../common/sliderleft-arrow';
import { SliderRightArrow } from '../common/Sliderright-arrow';

const Ourwork = () => {
    const swiperRef = useRef(null);
    const playerRefs = useRef({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    const videoIds = [
        "N7JU_zarNT0",
        "dQw4w9WgXcQ",
        "3JZ_D3ELwOQ",
        "L_jWHffIx5E",
        "E07s5ZYygMg",
        "RgKAFK5djSk"
    ];

    // Load YouTube IFrame API and setup players
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            videoIds.forEach((id, index) => {
                playerRefs.current[index] = new window.YT.Player(`ytplayer-${index}`, {
                    events: {
                        onReady: (event) => {
                            const player = event.target;

                            const checkDuration = () => {
                                const duration = player.getDuration();
                                if (duration > 0) {
                                    if (index === 0) {
                                        setActiveIndex(0);
                                        setPreviousIndex(0);
                                        setVideoDuration(duration);
                                        player.seekTo(0);
                                        player.playVideo();
                                        setIsPlayerReady(true);
                                    }
                                } else {
                                    setTimeout(checkDuration, 100);
                                }
                            };

                            checkDuration();
                        }
                    }
                });
            });
        };
    }, []);

    // Handle slide changes
    const handleSlideChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setPreviousIndex(activeIndex);
        setActiveIndex(newIndex);
        setIsPlayerReady(false);

        const player = playerRefs.current[newIndex];
        if (player && typeof player.getDuration === 'function') {
            const waitForDuration = () => {
                const duration = player.getDuration();
                if (duration > 0) {
                    player.seekTo(0);
                    player.playVideo();
                    setVideoDuration(duration);
                    setIsPlayerReady(true);
                } else {
                    setTimeout(waitForDuration, 100);
                }
            };

            waitForDuration();
        }
    };

    // Auto move to next slide after video
    useEffect(() => {
        if (videoDuration > 0) {
            const timeout = setTimeout(() => {
                if (swiperRef.current && swiperRef.current.slideNext) {
                    swiperRef.current.slideNext();
                }
            }, videoDuration * 1000);

            return () => clearTimeout(timeout);
        }
    }, [activeIndex, videoDuration]);

    return (
        <section className="ourwork">
            <div className="container mx-auto">
                <h2 className="text-center mb-8">Our latest work</h2>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={22}
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 1.05 },
                    768: { slidesPerView: 1.2 },
                    1024: { slidesPerView: 1.2 },
                    1280: { slidesPerView: 1.2 },
                }}
                className="swiper-container work-swiper"
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {videoIds.map((videoId, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative rounded-xl overflow-hidden group">
                            <iframe
                                id={`ytplayer-${i}`}
                                className="w-full h-[80vh] rounded-xl"
                                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                                title={`YouTube video ${i + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden z-10">
                                <div
                                    className={`h-full bg-[#4B22E0] transition-all ease-linear ${activeIndex === i && isPlayerReady ? 'w-full' : 'w-0'
                                        }`}
                                    style={{
                                        transitionDuration:
                                            activeIndex === i && isPlayerReady
                                                ? `${videoDuration}s`
                                                : '0s',
                                    }}
                                ></div>
                            </div>

                            <div className="absolute bottom-0 px-3 lg:px-[62px] pb-4 lg:pb-8 text-white flex justify-between items-end w-full gap-4 flex-row">
                                <h3 className="white text-base md:text-2xl">
                                    Built a Coliving space booking platform <br /> for students and professionals
                                </h3>
                                <h3 className="white text-[22px]">Fllat</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <button className="prev-btn cursor-pointer absolute top-1/2 left-1 md:left-8 lg:left-23 transform -translate-y-1/2 bg-black/50 backdrop-blur-[14px] shadow p-2 lg:p-4 rounded-full z-10">
                    <SliderLeftArrow />
                </button>
                <button className="next-btn cursor-pointer absolute top-1/2 right-1 md:right-8 lg:right-23 transform -translate-y-1/2 bg-black/50 backdrop-blur-[14px] shadow p-2 lg:p-4 rounded-full z-10">
                    <SliderRightArrow />
                </button>
            </Swiper>
        </section>
    );
};

export default Ourwork;
