import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fontOutfit, fontSofiaCondensed } from "@/misc/fonts";
import Link from "next/link";

export const metadata = {
  title: "Paracord Z - Carrinho",
  description: "Esse é o seu carrinho de produtos da Paracord Z",
};

const Cart = () => {
  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8 mt-24">
        <span
          className={`text-2xl font-semibold uppercase tracking-wider ${fontSofiaCondensed.className}`}
        >
          CARRINHO (0)
        </span>

        <div className={`h-[50vh] flex flex-col gap-4 ${fontOutfit.className}`}>
          <span>Seu carrinho está vazio!</span>

          <Link
            href="/"
            className={`bg-white border border-zinc-900 rounded-full text-zinc-900 text-lg font-semibold px-4 py-1 tracking-wider w-fit ${fontSofiaCondensed.className}`}
          >
            COMPRAR AGORA
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Cart;
