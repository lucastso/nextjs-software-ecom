import Link from "next/link";

const Mosaic = () => {
  return (
    <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-24">
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
            - Tecnologias modernas -
          </span>
          <span className="w-2/3 text-center">
            A construção do software é feita utilizando tecnologias e
            ferramentas modernas. Você também tem o poder de escolher.
          </span>

          <Link
            href="/produtos"
            className="bg-amber-400 rounded-full text-zinc-900 text-lg font-sofia font-semibold px-4 py-1 tracking-wider"
          >
            AGENDAR REUNIÃO
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581013793663-dedd7e462266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
          className="xs:h-[25rem] lg:h-[40rem] w-full rounded-sm object-cover"
        />
      </div>
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
        <img
          src="https://images.unsplash.com/photo-1558986377-c44f6a2b50f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="xs:h-[25rem] lg:h-[40rem]  w-full rounded-sm object-cover xs:order-last lg:order-first"
        />
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
            - O código fica com você -
          </span>
          <span className="w-2/3 text-center">
            Nós vamos fazer o software, mas você terá acesso ao código e a
            qualquer outra plataforma externa que utilizarmos.
          </span>

          <Link
            href="/produtos"
            className="bg-amber-400 rounded-full text-zinc-900 text-lg font-sofia font-semibold px-4 py-1 tracking-wider"
          >
            VER CATALOGO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
