'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import { addBookMarkUser } from '@/lib/actions/user.actions'
import { toast } from 'sonner'
import { FaCircleCheck } from 'react-icons/fa6'

const Card = ({ data, userID, type }) => {

    const pathname = usePathname()
    const handleBookMark = async ({ animeID, title, airing, status, image }) => {
        await addBookMarkUser({
            userID: JSON.parse(userID),
            name: title,
            animeID: animeID,
            image: image,
            airing: airing,
            status: status,
            path: pathname
        })

        toast("Bookmark Added", {
            icon: <FaCircleCheck />,
            unstyled: true,
            classNames: {
                toast: 'flex items-center rounded-[10px] border-0 p-3 bg-light-2',
                title: 'text-dark-1 text-base font-ui-text font-bold',
                cancelButton: 'bg-orange-400',
                closeButton: 'bg-lime-400',
            }
        })
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

    const variants = {
        initial: {
            opacity: "0",
            y: "100%",
        },
        animate: (i) => ({
            opacity: "1",
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.75,
                ease: [0.65, 0, 0.35, 1],
            }
        }),
    }

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <motion.div className="embla md:h-[20rem] h-[23rem] ">
            <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla2__container h-full p-5">
                    {data?.map((anime, index) => (

                        <motion.div key={index} className='flex w-full h-full justify-center rounded-2xl embla2__slide flex-col relative overflow-hidden' variants={variants} style={{ transformOrigin: "bottom center" }}
                            initial="initial"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                            whileInView="animate"
                            custom={index}
                        >

                            <Link href={`/${type}/${anime.mal_id}`} className='w-full h-full bg-mainColor-2 rounded-3xl' >
                                <div className='w-full h-full relative rounded-3xl' >
                                    <motion.div layout="animeBg" className='w-full h-full relative rounded-3xl' >
                                        <Image
                                            src={anime.images.webp.large_image_url}
                                            alt={anime.title}
                                            fill
                                            className=' rounded-[2rem] rounded-t-[4.5rem] px-2 pb-2 pt-12'
                                        />
                                    </motion.div>

                                    <h2 className="font-semibold font-ui-text text-light-2 line-clamp-1 w-full text-base absolute top-0 pl-4 pt-4 ">
                                        {anime.title}
                                    </h2>

                                    <div className="flex gap-3 z-[1] absolute bottom-[9px] left-0 text-ellipsis whitespace-nowrap px-3 items-end">
                                        <div>
                                            <p className="text-white rounded-3xl text-xs font-bold items-center flex bg-glassmorphism2 backdrop-blur-xl px-3 py-1 gap-2">
                                                {anime.score}
                                                <span className='bg-dark-4 rounded-full p-2 ' >
                                                    <Image src={"/assest/star.svg"} width={14} height={14} alt='star' />
                                                </span>
                                            </p>
                                        </div>
                                        {userID && <div>
                                            <div className="items-center flex">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className='bg-light-2 rounded-full px-3 py-3 cursor-pointer' onClick={() => handleBookMark({
                                                        animeID: anime.mal_id,
                                                        title: anime.title_english,
                                                        airing: anime.airing,
                                                        status: anime.status,
                                                        image: anime.images.webp.large_image_url,
                                                    })}  >
                                                    <Image src={"/assest/bookmark.svg"} width={18} height={22} alt='star' />
                                                </motion.div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>

                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </motion.div>
    )
}

export default Card