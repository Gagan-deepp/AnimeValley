import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full fixed left-0 z-10' >
      <div className='wrapper flex justify-between items-center relative ' >
        <Link href={"/"} >
          <Image
            src={"/addimg/test1.png"}
            height={38}
            width={60}
            className='object-cover'
          />
        </Link>

        <SignedIn>
          <nav className='flex-[0.3]' >
            <NavItems />
          </nav>
        </SignedIn>


        <div className=' flex justify-end w-32 gap-4 items-center'>
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