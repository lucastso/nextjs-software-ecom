import About from "@/components/about";
import BannerHero from "@/components/banner_hero";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <BannerHero />
      <div className="flex flex-col gap-24">
        <Categories />
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
