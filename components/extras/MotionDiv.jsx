'use client'
import { motion, useScroll, useTransform } from "framer-motion"
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


    return (
        <motion.div layoutId="animeBg" className="relative w-full h-[100dvh] " ref={targetRef} style={{ opacity }}>
            <motion.div style={{ position }} className=" fixed top-0 left-0 right-0 w-full h-full ">
                {children}
            </motion.div>

        </motion.div>
    )
}

export default MotionDiv
