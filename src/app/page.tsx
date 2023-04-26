import BannerHero from "@/components/banner_hero";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Mosaic from "@/components/mosaic";
import Navbar from "@/components/navbar";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <BannerHero />
      <div className="flex flex-col gap-24">
        <Categories />
        <Mosaic />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
