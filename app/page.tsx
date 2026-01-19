import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import FeaturedBanner from "@/components/FeaturedBanner";
import GenderCollection from "@/components/GenderCollection";
import ClassicHighlight from "@/components/ClassicHighlight";
import MagazineSection from "@/components/MagazineSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Collection />
      <FeaturedBanner/>
      <GenderCollection/>
      <ClassicHighlight/>
      <VideoSection/>
      <MagazineSection/>
      <Footer />
    </main>
  );
}
