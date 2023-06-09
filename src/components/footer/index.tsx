import { fontOutfit } from '@/misc/fonts'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={`w-screen ${fontOutfit.className}`}>
      <div className="bg-zinc-200 text-white text-sm mt-24">
        <div className="w-4/6 mx-auto flex xs:flex-col lg:flex-row xs:gap-12 lg:gap-0 items-start justify-between py-12">
          <div className="flex flex-col items-start gap-4 text-zinc-400">
            <Link href="/">
              <Image
                src="/vite.svg"
                alt="Logo"
                className="w-32"
                width={128}
                height={0}
                fill
              />
            </Link>
            <span>A Paracord Z é um e-commerce de softwares.</span>
          </div>
          <div className="flex items-start gap-8 text-zinc-900">
            <div className="flex flex-col gap-4">
              <strong>Loja</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="/">Newsletter</Link>
                <Link href="/favourites">Favoritados</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Suporte</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="tel:15981289156">15-98128-9156</Link>
                <Link href="/terms">Termos de uso</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col xs:items-start lg:items-end gap-4">
            <strong className="text-zinc-900">Métodos de pagamento</strong>
            <Image
              width={192}
              height={0}
              fill
              src="https://vinomundi.com.br/wp-content/uploads/2022/02/bandeira-de-cartoes-11.webp"
              alt="Payment methods"
            />
          </div>
        </div>
      </div>

      <div className="w-4/6 mx-auto border-t border-zinc-300 text-zinc-400 text-center py-4 text-xs bg-white">
        <span>Copyright &copy; Woogon. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
