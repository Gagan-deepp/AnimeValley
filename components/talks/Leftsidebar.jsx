'use client'
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
    <div className='leftsidebar overflow-hidden'>

      <div className='flex flex-col' >
        <Link href={"/"} >
          <Image
            src={"/addimg/test1.png"}
            height={30}
            width={55}
            className='object-cover'
          />
        </Link>
      </div>

      <div className='mt-4'>

        <ul className='flex flex-col gap-8' >
          {sideBarItem.map((items, index) => {

            const isActive = pathname == items.href
            if (items.href === "/profile") items.href = `${items.href}/${userId}`;

            return (
              <li key={index} className={`cursor-pointer hover:scale-[1.1] transition-all ease-in-out duration-150 text-slate-600 relative flex items-start`} >

                <Link href={items.href} className={`font-heading font-medium text-base text-light-1 flex items-center gap-4 p-2  ${isActive && 'bg-light-2 '} rounded-2xl `} >
                  <Image
                    src={isActive ? items.ActiveimgURL : items.imgURL}
                    alt={items.name}
                    width={25}
                    height={25}
                  />
                  <p className='hidden' > {items.name} </p>
                </Link>
              </li>)
          })}
        </ul>
      </div>

      <div className='flex-1 flex' >
        <div className='mt-auto pb-8 flex flex-col gap-6 items-center' >


          {pathname === "/activity" ?
            <Link href={"/activity"} className='p-2 rounded-2xl bg-light-2' >
              <Image
                src={"/assest/bellActive.svg"}
                alt="Activity"
                width={25}
                height={25}
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