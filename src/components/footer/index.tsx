import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-screen">
      <div className="bg-zinc-200 text-white text-sm mt-24">
        <div className="w-4/6 mx-auto flex xs:flex-col lg:flex-row xs:gap-12 lg:gap-0 items-start justify-between py-12">
          <div className="flex flex-col items-start gap-4 text-zinc-400">
            <Link href="/">
              <img src="/vite.svg" alt="Logo" className="w-32" />
            </Link>
            <span>A Paracord Z é um e-commerce de softwares.</span>
          </div>
          <div className="flex items-start gap-8 text-zinc-900">
            <div className="flex flex-col gap-4">
              <strong>Loja</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="/">Newsletter</Link>
                <Link href="/favoritados">Favoritados</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Suporte</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="tel:15981289156">15-98128-9156</Link>
                <Link href="/termos">Termos de uso</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col xs:items-start lg:items-end gap-4">
            <strong className="text-zinc-900">Métodos de pagamento</strong>
            <img
              src="https://vinomundi.com.br/wp-content/uploads/2022/02/bandeira-de-cartoes-11.webp"
              alt="Payment methods"
              className="w-48"
            />
          </div>
        </div>
      </div>

      <div className="w-4/6 mx-auto border-t border-zinc-300 text-zinc-400 text-center py-4 text-xs">
        <span>Copyright &copy; Woogon. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
