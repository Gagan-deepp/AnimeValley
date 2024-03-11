'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { sildeImgs } from '@/constants/data';

const MainSlider = () => {

    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    return (
        <div className='pt-20 relative'>
            <Swiper
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index) {
                        return `<span class=" swiper-pagination-bullet"></span>`;
                    },

                }}
                loop={true}
                modules={[Navigation, Pagination]}
                className="h-96 slideWrapper rounded-3xl">
                {sildeImgs.map((imgs, index) => {

                    return (
                        <SwiperSlide key={index} className={`flex h-full w-full justify-center`}>

                            <div className={`h-full w-full relative after:hidden after:sm:block after:bg-bg-shadow after:absolute after:bottom-0 after:left-0 after:z-0 after:right-0 after:h-full after:w-full after:mix-blend-lighten`}>

                                <div className='h-full w-full relative'>
                                    <Image src={imgs.src} alt={imgs.alt} fill className='h-full w-full object-cover' />
                                </div>

                                <div className='absolute top-[5%] left-14 z-[1] w-96 h-32 sm:block hidden'>
                                    <div className='w-full h-full'>
                                        <Image src={imgs.logo} alt={imgs.alt} fill className='' />
                                    </div>

                                    <div className='flex flex-col gap-2 text-white mt-6  w-[110%]' >
                                        <h3 className='font-ui-text font-semibold text-2xl' > {imgs.name} </h3>
                                        <div className='flex-row gap-2 flex text-text-shadow font-semibold text-sm'>
                                            <span> {imgs.year} </span>
                                            <span> | Anime </span>
                                        </div>
                                        <p className='text-sm'> {imgs.desc} </p>

                                    </div>

                                    <button className=' rounded-xl md:flex items-center pl-6 pr-6 text-white hidden bg-white/30 backdrop-blur-lg pt-2 pb-2 gap-2 mt-4' >
                                        <FaPlus />
                                        <span className='text-sm font-medium' >Add To List</span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className="swiper-pagination flex-center gap-4 pointer-events-auto"></div>
            </Swiper>
            <div className='hidden md:block'>
                <button ref={navigationNextRef} className='absolute right-8 text-3xl top-2/4'> <FaChevronRight /></button>
                <button ref={navigationPrevRef} className='text-3xl top-2/4 absolute left-8' ><FaChevronLeft /> </button>
            </div>
        </div>
    )
}

export default MainSlider