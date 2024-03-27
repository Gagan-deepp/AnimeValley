'use client'

import { motion } from "framer-motion"

const HamBurger = ({ isOpen, setisOpen, isNavShow, setisNavShow }) => {

  const handleClick = () => {
    setisOpen(!isOpen);
    setisNavShow(!isNavShow);
  }

  return (
    isNavShow && <motion.div className='w-10 h-12 flex flex-col justify-center gap-1 absolute top-1 cursor-pointer left-8' layoutId="navClose" onClick={() => handleClick()} >
      <span className={`bg-light-1 w-full h-[0.3rem] rounded-2xl transition-all duration-300 ease-in-out block ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
      <span className={`bg-light-1 w-2/3 h-[0.3rem] transition-all rounded-2xl duration-300 ease-in-out block ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
    </motion.div>
  )
}

export default HamBurger
