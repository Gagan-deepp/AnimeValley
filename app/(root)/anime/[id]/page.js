import { MotionDiv } from "@/components/extras/MotionDiv"
import AnimeDetail from "@/components/webcomp/AnimeDetail"
import Header from "@/components/webcomp/Header"
import { fetchAnimeData, fetchAnimeImage } from "@/lib/actions/fetch.action"
import { checkBookMark } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { FaPlay } from "react-icons/fa6"

const page = async ({ params }) => {

    const user = await currentUser();
    if (!user) return null;

    let random = Math.floor(Math.random() * 4)

    const animeData = await fetchAnimeData(params.id);
    const animeImg = await fetchAnimeImage(params.id);
    const isBookMark = await checkBookMark({ userID: user.id, animeID: params.id });

    return (
        <div className="w-full h-fit" >
            <Header />
            {animeData && <section className=" flex flex-col flex-1 " >

                <div className="w-full h-full md:flex flex-col relative" >

                    <div className="w-full h-fit" >
                        <Link href={animeData?.data?.trailer.embed_url} target="_blank" className="relative h-40 md:h-[40dvh] w-full flex justify-center after:bg-bg-shadow after:absolute after:bottom-0 after:left-0 after:z-0 after:right-0 after:h-full after:w-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 after:ease-in-out after:origin-bottom" >
                            <Image src={animeData?.data?.trailer.images.large_image_url} alt="thumbnail" fill quality={100}
                                className="object-cover" />
                            <div className="absolute self-center" >
                                <span className="bg-dark-4 w-16 h-16 rounded-full flex-center" >
                                    <FaPlay className="text-2xl text-light-7" />
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full h-full md:flex flex-row gap-4 relative md:p-8 md:mt-[-5rem] md:z-[5]" >
                        <MotionDiv>
                            <Image quality={100} src={animeImg?.data[random]?.webp.large_image_url} alt="anime" fill className="md:rounded-xl" />
                        </MotionDiv>

                        <div className="min-h-[100dvh] w-full md:bg-transparent bg-dark-2 md:backdrop-blur-0 backdrop-blur-lg relative md:mt-0 -mt-36 main-container rounded-t-3xl pb-10 md:rounded-none md:pt-16 " >
                            <div className="absolute top-4 left-[45%] w-12 h-[0.2rem] bg-light-1 rounded-3xl flex md:hidden" />
                            <AnimeDetail anime={animeData?.data} bookMarkerd={isBookMark} />
                        </div>
                    </div>
                </div>

            </section>}
        </div>
    )
}

export default page
