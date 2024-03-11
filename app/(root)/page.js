import MainSlider from "@/components/webcomp/MainSlider";
import TopContent from "@/components/webcomp/TopContent";

export default function Home() {
  return (
    <section className="bg-primary-50 h-full flex flex-col gap-8" >
      <MainSlider />
      <TopContent/>
    </section>
  );
}
