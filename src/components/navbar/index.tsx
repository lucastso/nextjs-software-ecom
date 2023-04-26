import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center w-screen">
      <div className="text-zinc-900 py-3 border-b border-zinc-100 xs:text-sm lg:text-xs w-screen">
        <div className="flex xs:flex-col lg:flex-row items-center justify-between xs:gap-8 lg:gap-0 xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0">
          <div className="xs:text-center lg:text-start">
            <a href="#" className="underline">
              Inscreva-se
            </a>{" "}
            para receber o nosso e-book.
          </div>

          <div className="flex items-center xs:justify-between lg:justify-center gap-8 xs:w-full lg:w-fit">
            <Link
              href="/favoritados"
              className="flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-star"></i>
              <span>Favoritados</span>
            </Link>
            <Link
              href="/carrinho"
              className="flex items-center justify-center gap-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3721/3721818.png"
                alt="Basket icon"
                className="w-[0.80rem]"
                draggable={false}
              />
              <span>
                R$ <strong>0</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 py-6">
        <Link href="/">
          <img src="/vite.svg" alt="Logo" className="w-32" />
        </Link>

        <div className="xs:hidden lg:flex items-center justify-center gap-8 font-sofia font-semibold text-lg tracking-wider">
          <Link href="/" className="font-semibold">
            HOME
          </Link>
          <Link href="/produtos" className="font-semibold">
            SOFTWARES
          </Link>
          <Link href="/produtos" className="font-semibold">
            MEETING
          </Link>
        </div>

        <div className="xs:hidden lg:flex items-center justify-center">
          <div className="bg-zinc-100 w-56 h-10 relative rounded-full flex items-center">
            <input
              type="text"
              className="absolute left-0 bg-transparent w-full focus:outline-none pl-4 pr-12"
              placeholder="Pesquisar..."
            />
            <Link
              href="/produtos"
              className="bg-amber-400 rounded-full w-10 h-10 text-zinc-900 font-bold text-sm flex items-center justify-center absolute right-0"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>

        <i className="xs:block lg:hidden fa-solid fa-bars text-xl"></i>
      </div>
    </nav>
  );
};

export default Navbar;
