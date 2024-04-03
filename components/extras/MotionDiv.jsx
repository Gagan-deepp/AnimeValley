'use client'
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const MotionDiv = ({ children }) => {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );

    const x = useMotionValue(0)
    const y = useMotionValue(0)
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
        <motion.div layoutId="animeBg" className="relative w-full h-[100dvh] md:w-1/3 box-border" ref={targetRef} >
            <motion.div style={{ position, opacity }} className=" fixed top-0 left-0 right-0 w-full h-full md:hidden flex">
                {children}
            </motion.div>

            <motion.div className=" hidden md:flex fixed top-[13%] left-[5%] bottom-0 w-full h-full">
                <motion.div className="w-[25vw] h-[60dvh] relative flex-center rounded-3xl"
                    onMouseMove={handleMouse}
                    onMouseLeave={handleLeave}
                    style={{ transformStyle: "preserve-3d", rotateX, rotateY, ease: [0.65, 0, 0.35, 1] }}
                >
                    <motion.div
                        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d", }}
                        className="w-full h-full relative rounded-3xl" >
                        {children}
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default MotionDiv
