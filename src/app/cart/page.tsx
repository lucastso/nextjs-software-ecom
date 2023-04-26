import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

const Cart = () => {
  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8 mt-24">
        <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
          CARRINHO (0)
        </span>

        <div className="h-[50vh] flex flex-col gap-8">
          <span>Seu carrinho está vazio!</span>

          <Link
            href="/"
            className="bg-orange-200 rounded-full text-orange-400 text-lg font-sofia font-semibold px-4 py-1 tracking-wider w-fit xs:self-start lg:self-center"
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
