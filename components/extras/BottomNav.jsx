'use client'
import { motion } from 'framer-motion';
import { bottomNavItem } from '@/constants/data'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNav = () => {
    const pathname = usePathname();
    const { userId } = useAuth();
    return (
        <div className='flex items-center sm:hidden w-full h-fit bg-dark-1 fixed -bottom-0.5 left-0 right-0 px-6 py-2' >
            <nav className='flex-1'>
                <ul className='flex justify-around gap-5 flex-1' >
                    {bottomNavItem.map((items, index) => {

                        const isActive = pathname === items.href
                        if (items.href === "/profile") items.href = `${items.href}/${userId}`;

                        return (
                            <motion.li
                                key={index} className={`cursor-pointer text-slate-600 relative flex items-start`} >

                                <Link href={items.href} className="flex gap-4 items-center p-2" title={items.name} >
                                    {isActive && <motion.span layoutId='bottomNav' className='bg-light-2  absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-2xl z-[-1]' />}
                                    <Image
                                        src={items.imgURL}
                                        alt={items.name}
                                        width={24}
                                        height={24}
                                        className='z-10'
                                    />

                                </Link>
                            </motion.li>)
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default BottomNav
