import MangaContent from "@/components/webcomp/MangaContent"

const page = () => {
    return (
        <section className="flex-1 min-h-[100dvh] pt-24 flex justify-center items-center pb-12 md:pb-0" >
            <div className="slideWrapper flex flex-col gap-28">
                <MangaContent title="Timeless Manga Gems" type="manga" />
                <MangaContent page={'second'} title="Manhwa Masterpieces" type="manga" />
                <MangaContent page={'third'} title="Whispers of Tomorrow Mangas" type="manga" />
                <MangaContent page={'fourth'} title="Luminous Light Novels Library" type="manga" />
            </div>
        </section>
    )
}

export default page