import About from '@/components/about'
import Categories from '@/components/categories'
import { fontOutfit, barlowCondensed } from '@/misc/fonts'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="overflow-x-hidden font-outfit text-zinc-900">
      <section className="h-[65vh] flex items-center justify-center rounded-sm xs:w-full lg:w-4/6 mx-auto overflow-hidden bg-zinc-900">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          fill
          src="https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Software image"
          className="w-full h-full xs:opacity-50 lg:opacity-90 object-cover rounded-sm"
          draggable={false}
        />
        <div
          className={`absolute text-white flex flex-col items-center gap-4 xs:px-6 lg:px-0 ${fontOutfit.className}`}
        >
          <span className="text-3xl font-semibold text-center">
            Pare de pagar fortunas por softwares
          </span>
          <span className="w-2/3 text-center">
            A Paracord Z é um marketplace de softwares que você encontra a
            melhor solução para o seu problema.
          </span>
          <Link
            href="/produtos"
            className={`bg-white text-zinc-900 rounded-full text-lg font-semibold px-4 py-1 tracking-wider transition-colors ${barlowCondensed.className}`}
          >
            COMPRAR AGORA
          </Link>
        </div>
      </section>
      <div className="flex flex-col gap-24">
        <Categories />
        <About />
      </div>
    </div>
  )
}

export default HomePage
