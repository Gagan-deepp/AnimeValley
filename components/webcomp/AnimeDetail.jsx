'use client'
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { FaPlay } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { SignedIn } from "@clerk/nextjs";
import { addBookMarkUser } from "@/lib/actions/user.actions";

const AnimeDetail = ({ anime, bookMarkerd }) => {

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const trailerDiv = useRef();
    const upperDiv = useRef();
    const [hoverId, sethoverId] = useState(null);

    const { scrollYProgress } = useScroll({ target: trailerDiv, offset: ["start end", "end end"] })
    const upperRes = useScroll({ target: upperDiv, offset: ["start end", "end start"] })
    const x = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"])
    const y = useTransform(upperRes.scrollYProgress, [0, 0.5, 0.8, 1], ["95%", "0%", "0%", "100%"])
    const trailerY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
    const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1])


    const handleBookMark = async ({ animeID, title, airing, status, image }) => {
        await addBookMarkUser({
            userID: JSON.parse(userID),
            name: title,
            animeID: animeID,
            image: image,
            airing: airing,
            status: status,
            path: pathname
        })

        toast.success("Bookmark added")
    }
    return (
        <div className="w-full h-full my-6 mb-12 flex flex-col gap-7 overflow-hidden md:gap-12" >

            <motion.div ref={upperDiv} className="flex flex-col gap-4 overflow-hidden md:gap-7" >
                <div className="flex gap-4 items-center" >
                    <h3 className="font-heading-2 font-semibold text-light-2 text-lg md:text-2xl" > Name : </h3>
                    <p className="font-ui-text-3 font-bold text-light-3" > <span className="bg-button-bg text-transparent bg-clip-text" > {anime.title_english} </span> | {anime.title}
                        <span className="text-2xl font-ui-text md:inline hidden" > ({anime.year}) </span>
                    </p>
                </div>

                <div className="flex gap-4 items-center overflow-hidden " >
                    <motion.h3 style={{ y }} className="font-heading-2 font-semibold text-light-2 text-lg relative md:text-2xl" > Japanese Name : </motion.h3>
                    <motion.p style={{ y }} transition={{ delay: 0.1 }} className="font-ui-text-3 font-bold text-light-3 relative" > {anime.title_japanese} </motion.p>
                </div>

                <div className="flex gap-4 items-center overflow-hidden" >
                    <motion.h3 style={{ y }} className="font-heading-2 font-semibold text-light-2 text-lg flex gap-3 items-center relative md:text-2xl" >
                        <span className='bg-dark-4 rounded-full p-2 ' >
                            <Image src={"/assest/star.svg"} width={18} height={18} alt='star' />
                        </span>
                        Rating :
                    </motion.h3>
                    <motion.p style={{ y }} transition={{ delay: 0.1 }} className="font-ui-text-3 font-bold text-light-3 relative" > {anime.score} / 10 </motion.p>
                </div>

                <div className="flex gap-4 items-center overflow-hidden" >
                    <motion.h3 style={{ y }} className="font-heading-2 font-semibold text-light-2 text-lg flex gap-3 items-center relative md:text-2xl" >
                        <span className='bg-dark-4 rounded-full p-2 ' >
                            <Image src={"/assest/epi.svg"} width={18} height={18} alt='star' />
                        </span>
                        Episodes :
                    </motion.h3>
                    <motion.p style={{ y }} transition={{ delay: 0.1 }} className="font-ui-text-3 font-bold text-light-3 relative" > {anime.episodes} | {anime.status} {anime.airing ? <span className=" text-2xl bg-button-bg text-transparent bg-clip-text" > * </span> : ""} </motion.p>
                </div>

                <div className="flex gap-4 items-center overflow-hidden" >
                    <motion.h3 style={{ y }} className="font-heading-2 font-semibold text-light-2 text-lg flex gap-3 items-center relative md:text-2xl" >
                        <span className='bg-dark-4 rounded-full p-2 ' >
                            <Image src={"/assest/air.svg"} width={18} height={18} alt='star' />
                        </span>
                        Aired :
                    </motion.h3>
                    <motion.p style={{ y }} transition={{ delay: 0.1 }} className="font-ui-text-3 font-bold text-light-3 relative" > {anime.aired.string} </motion.p>
                </div>

            </motion.div>

            <div className="w-full h-[0.1rem] bg-glassmorphism" />

            <motion.div ref={trailerDiv} className="flex flex-col gap-7 overflow-hidden" >
                <motion.div style={{ x, opacity }} className="md:hidden flex flex-col gap-3 relative " >

                    <motion.h3 transition={{ delay: 0.1 }} style={{ opacity, x, transformOrigin: "left center" }} className="font-heading-2 font-semibold text-light-2 text-lg flex gap-3 items-center md:text-2xl" >
                        <span className='bg-dark-4 rounded-full p-2 ' >
                            <Image src={"/assest/cinema.svg"} width={18} height={18} alt='star' />
                        </span> Watch Trailer :
                    </motion.h3>

                    <Link href={anime.trailer.embed_url} target="_blank" className="relative h-40 md:h-56 w-full flex justify-center rounded-3xl after:bg-glassmorphism3 after:absolute after:top-0 after:left-0 after:right-0 after:z-10 after:w-full after:h-full after:rounded-3xl after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 after:ease-in-out after:origin-bottom" >
                        <Image src={anime.trailer.images.large_image_url} alt="thumbnail" fill
                            className="object-cover rounded-3xl" />
                        <div className="absolute self-center" >
                            <span className="bg-dark-4 w-16 h-16 rounded-full flex-center" >
                                <FaPlay className="text-2xl text-light-7" />
                            </span>
                        </div>
                    </Link>
                </motion.div>

                <div className="flex flex-1 justify-center" >
                    {anime.genres.map((genre, i) => (
                        <motion.div
                            style={{ y: trailerY }}
                            key={i} onMouseEnter={() => sethoverId(i)}
                            onMouseLeave={() => sethoverId(null)}
                            className=" px-2 relative overflow-hidden"
                        >
                            <motion.button
                                className="text-light-6 font-bold font-ui-text-4 p-4 no-focus border bg-transparent border-light-4 rounded-3xl relative"
                                whileHover={{ color: "#484d45" }}>
                                <AnimatePresence mode="wait" >
                                    {hoverId === i &&
                                        <motion.span
                                            className="absolute w-full h-full top-0 right-0 left-0 rounded-3xl bg-light-2 z-[-1]"
                                            layoutId="hoverBackground"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: { duration: 0.15, ease: [0.76, 0, 0.24, 1] },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
                                            }} />
                                    }
                                </AnimatePresence>
                                {genre.name.split(" ")[0]}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[0.1rem] bg-glassmorphism" />

            <div>
                <div className="flex flex-col gap-3" >
                    <h3 className="font-heading-2 font-semibold text-light-2 text-lg flex gap-3 items-center md:text-2xl" >
                        <span className='bg-dark-4 rounded-full p-2 ' >
                            <Image src={"/assest/cinema.svg"} width={18} height={18} alt='star' />
                        </span> Summary :
                    </h3>

                    <p className="text-light-5 font-ui-text-2" > {anime.synopsis} </p>
                </div>
            </div>

            <div className="w-full h-[0.1rem] bg-glassmorphism" />

            <SignedIn>
                <div>
                    <div>
                        <motion.button
                            whileHover={{ scale: [1.04] }}
                            whileTap={{ scale: 0.97 }}
                            className="no-focus w-full h-10 bg-form_bg font-ui-text-3 relative text-xl font-bold flex-center gap-3 " disabled={bookMarkerd}
                            onClick={() => handleBookMark({
                                animeID: anime.mal_id,
                                title: anime.title_english,
                                airing: anime.airing,
                                status: anime.status,
                                image: anime.images.webp.large_image_url,
                            })}  >
                            {bookMarkerd ? "Already BookMarked" : "Add To BookMark"}
                            <Image src={"/assest/bookmark.svg"} width={18} height={25} alt='star' />
                        </motion.button>
                    </div>
                </div>
            </SignedIn >
        </div>
    )
}

export default AnimeDetail