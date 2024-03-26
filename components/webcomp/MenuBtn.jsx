import { motion } from "framer-motion"


const MenuBtn = ({ isNav, setisNav }) => {

    return (
        <div className='h-[40px] w-24 absolute top-0 right-0 rounded-2xl overflow-hidden cursor-pointer' >

            <motion.div className="relative el"
                animate={{ top: isNav ? "-100%" : "0" }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            >

                <div className='el bg-light-1 text-gray-3 elElement' onClick={e => setisNav(!isNav)}  >
                    <div className="el flex-center elText flex-col font-ui-text-3 font-bold" >
                        <p className="el1" > Menu </p>
                        <p className="el2" > Menu </p>
                    </div>
                </div>
                <div className='el bg-mainColor-2 text-light-2 elElement' onClick={e => setisNav(!isNav)}  >
                    <div className="el flex-center elText flex-col font-bold" >
                        <p className="el1" > Close </p>
                        <p className="el2" > Close </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MenuBtn
