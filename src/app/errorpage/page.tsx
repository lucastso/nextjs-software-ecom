import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

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
