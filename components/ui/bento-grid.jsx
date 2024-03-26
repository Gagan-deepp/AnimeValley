'use client'
import { cn } from "@/utils/cn";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const BentoGrid = ({ className, children }) => {
    return (
        <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl overflow-hidden ", className)}>
            {children}
        </div>
    );
};

const BentoGridItem = ({ className, img, description, header, index }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const targetContainer = useRef();
    const { scrollYProgress } = useScroll({ target: targetContainer, offset: ["start end", "end end"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
    const translateX = useTransform(scrollYProgress, [0, 1], ["-100px", "0px"])
    const negtranslateX = useTransform(scrollYProgress, [0, 1], ["100px", "0px"])
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
        <motion.div
            ref={targetContainer}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            className={cn("relative row-span-1 rounded-xl group/bento hover:shadow-xl duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-mainColor-2 justify-between flex flex-col space-y-4", className)}
            style={{ transformStyle: "preserve-3d", rotateX, rotateY, ease: [0.65, 0, 0.35, 1], opacity, x: index % 2 === 0 ? translateX : negtranslateX , duration : 0.3 }}
        >
            <motion.div
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d", }}
                className="relative h-full rounded-xl">
                {header}
            </motion.div>
        </motion.div >
    );
};

export { BentoGrid, BentoGridItem };
