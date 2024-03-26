import MainSlider from "@/components/webcomp/MainSlider";
import OurCommunity from "@/components/webcomp/OurCommunity";
import TopContent from "@/components/webcomp/TopContent";

export default function Home() {
  return (
    <section className="flex-1 min-h-screen pt-16 flex flex-col gap-12 items-center" >
      <MainSlider />

      <div className="slideWrapper flex flex-col gap-36">
        <TopContent title="Top Anime Picks" />
        <TopContent page={'second'} title="All Time Favourites" />
      </div>

      <OurCommunity />
    </section>
  );
}
