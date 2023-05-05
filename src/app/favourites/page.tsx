import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Paracord Z - Favoritos",
  description: "Esse são seus produtos favoritos da Paracord Z",
};

const Favourites = () => {
  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8 mt-24">
        <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
          Favoritos (0)
        </span>

        <div className="h-[50vh]">
          <span>Sem itens favoritados!</span>
        </div>
      </section>
      <Categories />
      <Footer />
    </main>
  );
};

export default Favourites;
