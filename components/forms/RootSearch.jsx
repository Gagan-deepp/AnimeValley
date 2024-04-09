'use client'
import Image from 'next/image'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation'

const RootSearch = () => {

    const router = useRouter()
    const [text, setText] = useState("")
    const [query] = useDebounce(text, 550)

    useEffect(() => {

        if (query === "") {
            return;
        } else {
            router.push(`/search?anime=${text}`)
        }
    }, [query])


    return (
        <div className='bg-glassmorphism3 w-full h-full p-3 rounded-xl' >
            <div className='flex flex-1 items-center gap-2 rounded-xl' >
                <Image src={'/assest/search.svg'} alt='search' width={20} height={20} />
                <Input className='bg-transparent border-none placeholder:text-light-6 text-light-6 w-full h-full text-xs font-bold font-ui-text-3 p-0 focus:placeholder:opacity-0 placeholder:opacity-[1] duration-300 ease-in-out no-focus' type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Explore...." />
            </div>
        </div>

    )
}

export default RootSearch