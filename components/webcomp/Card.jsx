'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Image from 'next/image'
import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='mt-6'>
            <Swiper className='w-full mainswiper'
                slidesPerView={4}
                spaceBetween={50}
                freeMode={true}
                modules={[FreeMode]}
            >
                {data.map((anime, index) => (
                    <SwiperSlide key={index} className='relative cursor-pointer hover:scale-[0.5]' >

                        <div className='relative h-[40vh] after:absolute after:bottom-0 after:bg-card-shadow after:w-full after:h-full after:rounded-2xl'>
                            <Image
                                src={`https://shikimori.one${anime.image.original}`}
                                alt={anime.name}
                                fill
                                className=' rounded-2xl'
                            />

                            <div className="flex flex-col gap-3 absolute bottom-4 z-[1]">
                                <div className="flex justify-center flex-col gap-1 relative px-3">
                                    <h2 className="font-semibold text-white text-xl line-clamp-1 w-full ">
                                        {anime.name}
                                    </h2>
                                    <div className="py-1">
                                        <p className="text-white text-sm font-bold capitalize">
                                            {anime.status} | {anime.score} ⭐
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Card