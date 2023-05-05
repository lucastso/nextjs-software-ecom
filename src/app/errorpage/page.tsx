import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Paracord Z - Erro :(",
  description:
    "Infelizmente não encontramos a página que você estava procurando. Tente voltar para o menu iniciail do Paracord Z Softwares",
};

const ErrorPage = () => {
  return (
    <div className="overflow-x-hidden font-outfit flex flex-col items-center justify-between min-h-screen text-zinc-900">
      <Navbar />
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
          404 :(
        </span>
        <span>Página não encontrada!</span>
        <Link
          href="/"
          className="text-2xl font-sofia font-semibold uppercase tracking-wider"
        >
          Voltar para home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
