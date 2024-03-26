'use client'
import Image from 'next/image';
import { FaPlus } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion"
import { sildeImgs } from '@/constants/data';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

const MainSlider = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const target = useRef();
    const { scrollYProgress } = useScroll({ target: target, offset: ["end end", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.3, 0])

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <motion.section className="embla h-[70vh] w-full relative flex justify-center z-0" ref={target} style={{ opacity }} transition={{ ease: [0.65, 0, 0.35, 1] }}>
            <div className="embla__viewport h-full w-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    {sildeImgs.map((imgs, index) => {
                        return (
                            <div key={index} className={`flex h-full w-full justify-center embla__slide rounded-2xl`}>

                                <div className={`h-full w-full relative after:bg-bg-shadow after:absolute after:bottom-0 after:left-0 after:z-10 after:right-0 after:h-full after:w-full after:mix-blend-soft-light`}>

                                    <div className='h-full w-full relative rounded-2xl'>
                                        <Image src={imgs.src} alt={imgs.alt} fill className='h-full w-full object-cover rounded-2xl' />
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
                                            <p className='text-sm font-ui-text-4'> {imgs.desc} </p>

                                        </div>

                                        <motion.button type="submit" className="bg-button-bg rounded-xl font-semibold p-2 mt-4 flex gap-2 text-light-2 items-center font-ui-text justify-center px-3" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }} >
                                            <FaPlus />
                                            <span className='text-sm ' >Add To List</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="embla__controls absolute bottom-0">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default MainSlider