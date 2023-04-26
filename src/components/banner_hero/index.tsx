import Link from "next/link";

const BannerHero = () => {
  return (
    <section className="h-[65vh] flex items-center justify-center rounded-sm xs:w-full lg:w-4/6 mx-auto overflow-hidden bg-zinc-900">
      <img
        src="https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
        alt="Software image"
        className="w-full opacity-90"
        draggable={false}
      />
      <div className="absolute text-white flex flex-col items-center gap-4">
        <span className="text-3xl font-semibold">
          Pare de pagar fortunas por softwares
        </span>
        <span className="xs:w-full lg:w-2/3 text-center">
          Agende projetos que caibam no seu bolso, sem dores de cabeça ou prazos
          fora do comum.
        </span>
        <Link
          href="/produtos"
          className="bg-white text-zinc-900 rounded-full text-lg font-sofia font-semibold px-4 py-1 tracking-wider transition-colors"
        >
          AGENDAR PROJETO
        </Link>
      </div>
    </section>
  );
};

export default BannerHero;
