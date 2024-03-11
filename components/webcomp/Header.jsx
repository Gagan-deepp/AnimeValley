import { OrganizationSwitcher, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full backdrop-blur-md fixed top-0 left-0 right-0 border-b z-10' >
      <div className='wrapper flex justify-between items-center' >
        <Link href={"/"} >
          <Image
            src={"/addimg/test1.png"}
            height={38}
            width={60}
            className='object-cover'
          />
        </Link>

        <SignedIn>
          <nav className='md:flex md:justify-between md:items-center hidden w-full max-w-xs ' >
            <NavItems />
          </nav>
        </SignedIn>


        <div className=' flex justify-end w-32 gap-4 items-center'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: "py-2 px-4"
              }
            }}
          />

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