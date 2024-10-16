'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

import { ReactLenis } from 'lenis/react'

import { useRouter } from "next/navigation";


export const MotionDiv = ({ children }) => {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );

    return (
        <motion.div layoutId="animeBg" className="relative w-full h-[100dvh] md:w-1/3 box-border" ref={targetRef} >
            <motion.div style={{ position, opacity }} className=" fixed top-0 left-0 right-0 w-full h-full md:hidden flex">
                {children}
            </motion.div>

            <motion.div className=" hidden md:flex w-full h-full justify-center">
                <motion.div className="w-[20vw] h-[50dvh] relative flex-center rounded-xl ">
                    <motion.div
                        className="w-full h-full relative rounded-xl" >
                        {children}
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export const LenisDiv = ({ children }) => {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export const ScrollableArea = ({ children, className }) => {
    const scrollableRef = useRef(null)

    return (
        <div
            ref={scrollableRef}
            className={`overflow-y-auto ${className || ''}`}
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
        >
            {children}
        </div>
    )
}


export const BackBtn = () => {

    const router = useRouter()

    return (
        <div onClick={router.back} className="cursor-pointer" >
            <IoChevronBackOutline className="text-light-2 text-2xl font-bold" />
        </div>
    )
}