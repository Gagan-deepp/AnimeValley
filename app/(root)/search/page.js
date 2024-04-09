import { searchAll } from "@/lib/actions/fetch.action"
import Link from 'next/link'
import Image from 'next/image'
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import Header from "@/components/webcomp/Header";
import { LenisDiv } from "@/components/extras/MotionDiv";
import FilterDiv from "@/components/extras/FilterDiv";
import MobileSearch from "@/components/extras/MobileSearch";

const page = async ({ searchParams }) => {

    const user = await currentUser();
    const animes = await searchAll(searchParams.anime, searchParams.type ? searchParams.type : null)
    const userinfo = await fetchUser({ userID: user?.id })



    return (
        <div className="main-container pt-0" >
            <Header />
            <LenisDiv className="w-full h-full pt-20 flex flex-col gap-9" >
                {animes && <FilterDiv text={searchParams.anime} />}

                {animes ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full min-h-screen h-full gap-12 " >
                        {animes?.data?.map((anime, index) => (
                            <div key={index} className='flex w-full h-[20rem] justify-center rounded-2xl embla2__slide flex-col relative overflow-hidden'>

                                <Link href={`/anime/${anime.mal_id}`} className='w-full h-full bg-mainColor-2 rounded-3xl' >
                                    <div className='w-full h-full relative rounded-3xl' >
                                        <div className='w-full h-full relative rounded-3xl' >
                                            <Image
                                                src={anime.images.webp.large_image_url}
                                                alt={anime.title}
                                                fill
                                                className=' rounded-[2rem] rounded-t-[4.5rem] px-2 pb-2 pt-12'
                                            />
                                        </div>

                                        <h2 className="font-semibold font-ui-text text-light-2 line-clamp-1 w-full text-base absolute top-0 pl-4 pt-4 ">
                                            {anime.title_english}
                                        </h2>

                                        <div className="flex gap-3 z-[1] absolute bottom-[9px] left-0 text-ellipsis whitespace-nowrap px-3 items-end">
                                            <div>
                                                <p className="text-white rounded-3xl text-xs font-bold items-center flex bg-glassmorphism2 backdrop-blur-xl px-3 py-1 gap-2">
                                                    {anime.score}
                                                    <span className='bg-dark-4 rounded-full p-2 ' >
                                                        <Image src={"/assest/star.svg"} width={14} height={14} alt='star' />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            </div>))}

                    </div>
                    : <MobileSearch />}

            </LenisDiv>
        </div>
    )
}

export default page