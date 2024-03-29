'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Lenis from "@studio-freight/lenis";

const BookMarkCard = ({ data }) => {

    const targetContainer = useRef();
    const { scrollYProgress } = useScroll({ target: targetContainer, offset: ["start end", "start center"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1])

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <motion.section ref={targetContainer}>

            <ScrollArea className="mb-2 h-[90vh] bg-mainColor-2 py-4 px-2 rounded-2xl my-4" >
                <div className="h-full" >
                    <div className="h-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {JSON.parse(data).map((anime, index) => (

                            <motion.div key={index} className='flex w-full h-[15rem] justify-center rounded-2xl flex-col relative overflow-hidden' style={{ opacity, scale, transformOrigin: "bottom center" }}
                                transition={{ ease: [0.65, 0, 0.35, 1], delay: index * 0.1 }}
                            >

                                <div className='w-full h-full relative bg-glassmorphism2 rounded-3xl' >
                                    <Image
                                        src={anime.image}
                                        alt={anime.name}
                                        fill
                                        className=' rounded-[2rem] rounded-t-[4.5rem] px-2 pb-2 pt-12'
                                    />

                                    <h2 className="font-semibold font-ui-text text-light-2 line-clamp-1 w-full text-sm absolute top-0 pl-4 pt-4 ">
                                        {anime.name}
                                    </h2>

                                    <div className="flex gap-3 z-[1] absolute bottom-[9px] left-0 text-ellipsis whitespace-nowrap px-3 items-end">
                                        <div>
                                            <p className="text-white rounded-3xl text-xs font-bold items-center flex bg-glassmorphism2 backdrop-blur-xl px-3 py-1 gap-2">
                                                {anime.status}
                                                <span className='bg-dark-4 rounded-full p-2 ' >
                                                    <Image src={"/assest/star.svg"} width={14} height={14} alt='star' />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </motion.div>
                        ))}

                    </div>
                </div>
            </ScrollArea>
        </motion.section>
    )
}

export default BookMarkCard
