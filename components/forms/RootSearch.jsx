'use client'
import Image from 'next/image'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation'

const RootSearch = () => {

    const router = useRouter()
    const [text, setText] = useState("")
    const [query] = useDebounce(text, 250)

    useEffect(() => {

        if (query === "") {
            return;
        } else {
            router.push(`/search?anime=${text}`)
        }
    }, [query])


    return (
        <div className='bg-glassmorphism3 w-full h-full px-2 py-1 rounded-xl' >
            <div className='flex flex-1 items-center gap-2 rounded-xl' >
                <Image src={'/assest/search.svg'} alt='search' width={20} height={20} />
                <Input className='bg-transparent px-0 m-0 text-light-6 font-ui-text-3 text-sm font-bold placeholder:text-gray-6 no-focus border-0' type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Explore...." />
            </div>
        </div>

    )
}

export default RootSearch