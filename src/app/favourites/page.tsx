import Categories from '@/components/categories'
import { fontOutfit, barlowCondensed } from '@/misc/fonts'

export const metadata = {
  title: 'Paracord Z - Favoritos',
  description: 'Esse são seus produtos favoritos da Paracord Z',
}

const Favourites = () => {
  return (
    <main className="overflow-x-hidden text-zinc-900 flex flex-col gap-8">
      <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8 mt-24">
        <span
          className={`text-2xl font-semibold uppercase tracking-wider ${barlowCondensed.className}`}
        >
          Favoritos (0)
        </span>

        <div>
          <span className={fontOutfit.className}>Sem itens favoritados!</span>
        </div>
      </section>
      <Categories />
    </main>
  )
}

export default Favourites
