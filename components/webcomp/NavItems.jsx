'use client'
import Link from 'next/link'
import { motion } from "framer-motion"
import { navitemData } from '@/constants/data'
import { usePathname } from 'next/navigation'

const NavItems = () => {

    const pathname = usePathname();
    let isActive
    return (
        <div>
            <ul className='flex gap-3 justify-evenly'>
                {navitemData.map((items, index) => {
                    if (pathname !== "/" && pathname.includes(items.href)) {
                        isActive = true
                    }
                    else if (pathname === "/" && items.href === "/") {
                        isActive = true
                    }
                    else isActive = false
                    return (
                        <li key={index} className={` text-gray-3 relative flex-center whitespace-nowrap `} >
                            {isActive && <motion.span layoutId='navBgHome' className='bg-light-2 absolute top-0 left-0 right-0 w-full h-full rounded-2xl z-[-1]' />}
                            <Link href={items.href} className={`font-ui-text font-semibold text-base ${isActive && 'text-gray-5 p-2'}`} >
                                {items.name}
                            </Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default NavItems