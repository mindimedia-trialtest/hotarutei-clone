import Access from "@/features/Access";
import Experience from "@/features/Experience";
import Footer from "@/features/Footer";
import Gallery from "@/features/Gallery";
import Hero from "@/features/Hero";
import Information from "@/features/Information";
import Menu from "@/features/Menu";
import Navbar from "@/features/Navbar";
import Overview from "@/features/Overview";
import Reservation from "@/features/Reservation";
import Restaurant from "@/features/Restaurant";
import Stay from "@/features/Stay";
import Show from "@/features/Vid";
import Tour from "@/features/Tour";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Information />
      <Gallery />
      <Overview />
      <Stay />
      <Show />
      <Restaurant />
      <Experience />
      <Tour />
      <Reservation />
      <Access />
      <Footer />
    </div>
  );
}
