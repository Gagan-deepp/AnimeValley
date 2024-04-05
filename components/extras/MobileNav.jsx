'use client'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import HamBurger from "./HamBurger"
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from "@clerk/nextjs"
import { mobileNavItem } from "@/constants/data"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { IoClose } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { dark } from "@clerk/themes"


const MobileNav = () => {

    const [isOpen, setisOpen] = useState(false);
    const [isNavShow, setisNavShow] = useState(true);
    const pathname = usePathname()
    const { userId } = useAuth();
    const { user } = useUser()

    const handleNav = () => {
        setisOpen(!isOpen);
        setisNavShow(!isNavShow);
    }

    const variants = {
        initial: {
            x: "-100%",
        },
        animate: {
            x: "0%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            x: "-100%",
            transition: {
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
            }
        },
    }

    const slideVariants = {

        initial: { x: "-80%" },

        enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),

        exit: i => ({ x: "-80%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })

    }

    return (
        <div className="flex sm:hidden" >

            <div>
                <HamBurger isOpen={isOpen} setisOpen={setisOpen} isNavShow={isNavShow} setisNavShow={setisNavShow} />
            </div>

            <AnimatePresence mode="wait" >
                {isOpen &&
                    <motion.div className="h-[80vh] w-[80vw] bg-gray-4 fixed top-6 left-0 rounded-tr-3xl rounded-br-3xl box-border"
                        variants={variants} initial="initial" animate="animate" exit="exit" >

                        <div className="px-8 py-10 box-border flex flex-col relative justify-between h-full" >

                            <motion.div className="absolute top-6 right-6 cursor-pointer" layoutId="navClose" onClick={() => handleNav()} >
                                <IoClose className="text-light-2 text-3xl" />
                            </motion.div>

                            <SignedIn>
                                <div className="flex gap-3 items-center flex-row" >
                                    <UserButton afterSignOutUrl='/' appearance={{
                                        baseTheme: dark,
                                        elements: {
                                            avatarBox: "w-12 h-12"
                                        }
                                    }} />
                                    <p className="text-light-2 font-semibold font-ui-text-4" > @{user.username} </p>
                                </div>
                            </SignedIn>

                            <SignedOut>
                                <div className="flex gap-3 items-center flex-row" >
                                    <Image src="/assest/profile.svg"
                                        width={24}
                                        height={24}
                                        alt="profile_pic"
                                        className="rounded object-contain" />
                                    <SignInButton>
                                        <p className="text-light-2 font-semibold font-ui-text-4 cursor-pointer hover:text-light-5 transition-all ease-in-out duration-150" > Signin </p>
                                    </SignInButton>
                                </div>
                            </SignedOut>

                            <div className="w-full min-h-[0.1rem] bg-light-1 mt-5 mb-5" />

                            <nav>
                                <ul className='flex flex-col gap-5' >
                                    {mobileNavItem.map((items, index) => {

                                        const isActive = pathname == items.href
                                        if (items.href === "/profile") items.href = `${items.href}/${userId}`;

                                        return (
                                            <motion.li
                                                variants={slideVariants}
                                                custom={index}
                                                initial="initial"
                                                animate="enter"
                                                exit="exit"
                                                key={index} className={`cursor-pointer text-slate-600 relative flex items-start`} >

                                                <Link href={items.href} className="flex gap-4 items-center p-2" title={items.name} >
                                                    {isActive && <motion.span layoutId='navBg' className='bg-dark-3 absolute top-1/3 right-0 h-3 rounded-full w-3' />}
                                                    <Image
                                                        src={isActive ? items.ActiveimgURL : items.imgURL}
                                                        alt={items.name}
                                                        width={25}
                                                        height={25}
                                                        className='z-10'
                                                    />

                                                    <p className={`font-heading-2 font-medium text-base z-10 ${isActive ? 'text-dark-3' : 'text-light-1'} `} >
                                                        {items.name}
                                                    </p>
                                                </Link>
                                            </motion.li>)
                                    })}
                                </ul>
                            </nav>

                            <SignedIn>
                                <motion.div variants={slideVariants} className="flex gap-3 items-center flex-row flex-1 mt-10"
                                    custom={6}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit" >
                                    <SignOutButton>
                                        <button className="flex text-light-2 items-center gap-2 font-medium" >
                                            <TbLogout2 className="text-2xl" />
                                            <p className="font-ui-text-4 leading-3 text-xl" > Logout </p>
                                        </button>
                                    </SignOutButton>
                                </motion.div>
                            </SignedIn>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default MobileNav
