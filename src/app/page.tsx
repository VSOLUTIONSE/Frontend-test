import SideBar from "@/components/home/SideBar";
import { navLinks, socials } from "@/statics/nav";
import { HeroSection } from "@/components/home/HeroSection";
import MealCaption from "@/components/home/MealCaption";
import MealBannerSection from "@/components/home/MealBannerSection";
import CloudSVGS from "@/components/ui/CloudSVGS";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <main className="relative flex mx-auto ">
        {/* Sidebar */}
        <SideBar socials={socials} navLinks={navLinks} />
        <div className="flex mx-auto  flex-1 max-w-[1147px] h-full flex-col items-center  justify-center">
          {/* Hero */}
          <HeroSection />
          {/* meal caption */}
          <MealCaption />
        </div>
        {/* cloud svgs */}
        <CloudSVGS />
      </main>
      <div className="flex mx-auto w-full relative  h-full flex-col items-center  justify-center">
        {/* Banner */}
        <MealBannerSection />
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
