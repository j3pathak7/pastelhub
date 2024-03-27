import AllCakes from "@/components/AllCakes";
import HeroSlider from "@/components/Slideshow";
import Slideshow from "@/components/Slideshow";
import Reviews from "@/components/Reviews";
import HorizontalSroll from "@/components/HorizontalSroll";

export default function Home() {
  return (
    <main className="bg-background">
      {/* <HeroSlider /> */}
      <Slideshow />
      <HorizontalSroll />
      <Reviews />
    </main>
  );
}
