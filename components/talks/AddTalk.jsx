"use client"
import { Button } from '../ui/button'
import { OrganizationSwitcher, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { dark } from '@clerk/themes'
import Image from 'next/image'
import { Input } from '../ui/input'

const AddTalk = () => {

    return (
        <div className='flex gap-8 w-full justify-between' >
            <div className='bg-[#1f1d33] text-gray-1 px-4 py-2 flex items-center w-[70%] rounded-3xl gap-4'>
                
                <div className='flex flex-1' >
                    <Image
                        src={'/assest/search.svg'}
                        alt='search'
                        width={20}
                        height={20}
                    />
                    <Input className='bg-transparent border-none text-light-6 w-full h-full text-base font-bold font-ui-text-3' type="text" placeholder="Explore Talk....?" onChange={(e)=>{console.log(e)}} />
                </div>

                <Link href={"/create-talk"} >
                    <Button className="bg-light-7 p-2 rounded-2xl" >
                        <Image
                            src={'/assest/add.svg'}
                            alt='addBtn'
                            width={25}
                            height={25}
                        />
                    </Button>
                </Link>
            </div>

            <div className=' flex justify-end w-32 gap-4 items-center'>
                <OrganizationSwitcher
                    appearance={{
                        baseTheme: [dark],
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
        </div >
    )
}

export default AddTalk