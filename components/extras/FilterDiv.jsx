'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation'
const FilterDiv = ({ text }) => {

    const router = useRouter()
    const [type, setType] = useState("")
    const [query] = useDebounce(type, 100)

    useEffect(() => {

        if (query === "") {
            return;
        } else {
            router.push(`/search?anime=${text}&type=${type}`)
        }
    }, [query])

    const filterOptions = [
        { name: "All", type: null, imgURL: "/assest/anime.svg", },
        { name: "Tv", type: "tv", imgURL: "/assest/anime.svg", },
        { name: "Movie", type: "movie", imgURL: "/assest/book.svg", },
        { name: "Ova", type: "ova", imgURL: "/assest/book.svg", },
        { name: "Special", type: "special", imgURL: "/assest/book.svg", },
    ]

    return (
        <div className='flex flex-row gap-6 items-center' >
            <motion.div whileTap={{ scale: 0.9 }} className="bg-mainColor-2 p-2 rounded-full w-fit h-fit" >
                <Image src={'/assest/filter.svg'} alt='filter' width={20} height={20} />
            </motion.div>

            <div className='flex flex-row gap-4 items-center' >
                {filterOptions.map((filter, i) => (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} key={i} className='flex gap-2 p-2 bg-glassmorphism rounded-2xl items-center cursor-pointer' onClick={e => setType(filter.type)} >
                        <Image src={filter.imgURL} alt='filter' width={15} height={15} />
                        <p className='text-sm text-light-7 font-ui-text' > {filter.name} </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FilterDiv