'use client'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link';
import { useRef } from 'react';
import { ImArrowUpRight2 } from "react-icons/im";

const Arrow = ({ href }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const targetContainer = useRef();
    const { scrollYProgress } = useScroll({ target: targetContainer, offset: ["start end", "end end"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
    const rotateX = useTransform(y, [-0.5, 0, 0.5], ["20.5deg", "0deg", "-18.5deg"])
    const rotateY = useTransform(x, [-0.5, 0, 0.5], ["20.5deg", "0deg", "-18.5deg"])

    const handleMouse = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top


        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;


        x.set(xPct)
        y.set(yPct)
    }

    const handleLeave = (e) => {
        x.set(0)
        y.set(0)
    }

    return (

        <motion.div className='rounded-full absolute right-10 bottom-0 md:flex hidden ' style={{ opacity, scale }} >
            <Link href={href} >
                <motion.div
                    ref={targetContainer}
                    onMouseMove={handleMouse}
                    onMouseLeave={handleLeave}
                    className='bg-light-7 p-4 rounded-full'
                    style={{ transformStyle: "preserve-3d", rotateX, rotateY, ease: [0.65, 0, 0.35, 1] }}
                >
                    <motion.div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d", }} >
                        <ImArrowUpRight2 className='text-3xl' />
                    </motion.div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default Arrow
