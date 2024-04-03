import MotionDiv from "@/components/extras/MotionDiv"
import AnimeDetail from "@/components/webcomp/AnimeDetail"
import { fetchAnimeData, fetchAnimeImage } from "@/lib/actions/fetch.action"
import { checkBookMark } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"

const page = async ({ params }) => {

    const user = await currentUser();
    if (!user) return null;

    let random = Math.floor(Math.random() * 9)

    const animeData = await fetchAnimeData(params.id);
    const animeImg = await fetchAnimeImage(params.id);
    const isBookMark = await checkBookMark({ userID: user.id, animeID: params.id });

    return (
        animeData && <section className=" flex flex-col flex-1 " >

            <div className="w-full h-full md:flex flex-row gap-4" >

                <MotionDiv>
                    <Image quality={100} src={animeImg?.data[random]?.webp.large_image_url} alt="anime" fill className="md:rounded-3xl" />
                </MotionDiv>

                <div className="min-h-[100dvh] w-full bg-dark-2 backdrop-blur-lg relative md:mt-0 -mt-36 main-container rounded-t-3xl pb-10 md:rounded-none md:pt-16" >
                    <div className="absolute top-4 left-[45%] w-12 h-[0.2rem] bg-light-1 rounded-3xl flex md:hidden" />
                    <AnimeDetail anime={animeData?.data} bookMarkerd={isBookMark} />
                </div>
            </div>

        </section>
    )
}

export default page
