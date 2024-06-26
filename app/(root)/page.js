import Header from "@/components/webcomp/Header";
import MainSlider from "@/components/webcomp/MainSlider";
import OurCommunity from "@/components/webcomp/OurCommunity";
import TopContent from "@/components/webcomp/TopContent";

export default function Home() {
  return (
    <div className="w-full h-fit" >
      <Header />
      <section className="flex-1 min-h-[100dvh] pt-16 flex flex-col gap-12 items-center" >
        <MainSlider />

        <div className="slideWrapper flex flex-col gap-36">
          <TopContent page={'second'} title="All Time Favourites" type="anime" />
          <TopContent title="Top Anime Picks" type="anime" />
          <TopContent page={'fourth'} title="Harmony of Anime Hits" type="anime" />
        </div>

        <OurCommunity />
      </section>
    </div>
  );
}
