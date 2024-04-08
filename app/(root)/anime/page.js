import Header from "@/components/webcomp/Header"
import TopContent from "@/components/webcomp/TopContent"

const page = () => {
    return (
        <div className="w-full h-fit" >
            <Header />
            <section className="flex-1 min-h-[100dvh] pt-24 flex justify-center items-center pb-12 md:pb-0" >
                <div className="slideWrapper flex flex-col gap-28">
                    <TopContent page={'second'} title="All Time Favourites" type="anime" />
                    <TopContent title="Top Anime Picks" type="anime" />
                    <TopContent page={'fourth'} title="Harmony of Anime Hits" type="anime" />
                </div>
            </section>
        </div>
    )
}

export default page