import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from '../extras/MobileNav'
import RootSearch from '../forms/RootSearch'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='w-full fixed left-0 z-10' >
      <div className='wrapper flex justify-between items-center relative flex-row-reverse sm:flex-row px-4 gap-10' >
        <Link href={"/"} >
          <Image
            src={"/addimg/test1.png"}
            alt='logo'
            height={38}
            width={60}
            className='object-cover'
          />
        </Link>

        <MobileNav />

        {/* <SignedIn> */}
        <nav className='flex-[0.3] hidden sm:flex' >
          <NavItems />
        </nav>
        {/* </SignedIn> */}

        <div className='hidden sm:flex flex-1 mr-[-2rem]' >
          <RootSearch />
        </div>

        <div className=' hidden sm:flex justify-end gap-4 items-center relative'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>

          <SignedOut>
            <Button asChild className="transition duration-200 ease-in-out hover:scale-[1.1] rounded-full bg-button-hover" size="lg" >
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header