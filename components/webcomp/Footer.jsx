'use client'
import Link from "next/link"
import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Footer = () => {

  const targetContainer = useRef()
  const { scrollYProgress } = useScroll({ target: targetContainer, offset: ["start end", "end end"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"])
  const p_y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (

    < motion.div ref={targetContainer} style={{ y }} className='bg-mainColor-2 relative w-full h-[40dvh]' >
      <div className='flex justify-center items-center h-full max-w-[90%] mx-auto z-0 py-5' >

        <div className='flex flex-col justify-around items-center h-full w-full' >
          <div>
            <motion.h3 className='text-light-7 font-ui-text font-bold text-3xl' style={{ scale, opacity }} > Community Connections </motion.h3>
            <motion.p className='text-center text-gray-4 font-heading' style={{ scale, opacity }} > Dive into Meaningful Conversations </motion.p>
          </div>

          <div className='overflow-hidden w-full flex flex-row justify-around items-center text-gray-2 font-bold text-sm font-heading' >
            <motion.p className='text-center relative' style={{ y: p_y, opacity }} >Created By Gagan. &#169; 2024 </motion.p>
            <div className="flex gap-3" >
              <Link href={"/"} >
                Home |
              </Link>
              <Link href={"/anime"} >
                Anime |
              </Link>
              <Link href={"/community"} >
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  )
}

export default Footer