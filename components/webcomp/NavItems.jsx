'use client'
import { navitemData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

    const pathname = usePathname();

    return (
        <ul className='md:flex-between flex gap-5' >
            {navitemData.map((items, index) => {

                const isActive = pathname == items.href

                return (
                    <li key={index} className={`hover:scale-[1.1] transition-all ease-in-out duration-150 text-slate-600 ${isActive && 'text-black'} relative flex-center whitespace-nowrap`} >

                        <Link href={items.href} className={`font-ui-text font-semibold ${isActive ? 'after:block' : 'after:hidden'} after:w-full after:h-[0.1rem] after:bg-slate-700 after:absolute after:bottom-0 after:left-0  after:rounded-2xl `} >
                            {items.name}
                        </Link>
                    </li>)
            })}
        </ul>
    )
}

export default NavItems