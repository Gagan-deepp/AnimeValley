'use client'
import { motion } from 'framer-motion';
import { sideBarItem } from '@/constants/data'
import { SignedIn, UserButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiBell } from "react-icons/hi";

const Leftsidebar = () => {

  const pathname = usePathname();
  const { userId } = useAuth();


  return (
    <div className={`leftsidebar overflow-hidden pl-3 fixed `}>

      <div className='flex flex-col' >
        <Link href={"/"} >
          <Image
            src={"/addimg/test1.png"}
            alt='logo'
            height={30}
            width={55}
            className='object-cover'
          />
        </Link>
      </div>

      <div className='mt-4 sticky top-6'>

        <ul className='flex flex-col gap-8' >
          {sideBarItem.map((items, index) => {

            const isActive = pathname === (items.href)
            if (items.href === "/profile") items.href = `${items.href}/${userId}`;

            return (
              <li key={index} className={`cursor-pointer hover:scale-[1.1] transition-all ease-in-out duration-150 text-slate-600 relative flex items-start`} >

                <Link href={items.href} className="font-heading font-medium text-base text-light-1 flex items-center p-2 relative" title={items.name} >
                  {isActive && <motion.span layoutId='navBg' className='bg-light-2 absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-2xl' />}
                  <Image
                    src={isActive ? items.ActiveimgURL : items.imgURL}
                    alt={items.name}
                    width={25}
                    height={25}
                    className='z-10'
                  />
                </Link>
              </li>)
          })}
        </ul>
      </div>

      <div className="items-end flex flex-1" >
        <div className='mt-auto pb-8 flex flex-col gap-6 items-center' >
          {pathname === "/activity" ?
            <Link href={"/activity"} className='p-2 relative' title='activity' >
              {pathname === "/activity" && <motion.span layoutId='navBg' className='bg-light-2  absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-2xl z-[-1]' />}
              <Image
                src={pathname === "/activity" ? "/assest/bellActive.svg" : "/assest/bell.svg"}
                alt="Activity"
                width={25}
                height={25}
                className='z-10'
              />
            </Link>
            :
            <div className='relative' >
              <Link href={"/activity"} className='after:absolute after:content-[""] after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:top-0 after:right-0' >
                <HiBell className='text-xl text-light-3' />
              </Link>
            </div>
          }

          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
        </div>
      </div>

    </div>
  )
}

export default Leftsidebar