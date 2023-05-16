import { fontOutfit } from '@/misc/fonts'
import React from 'react'

const Loading = () => {
  return (
    <main className="overflow-x-hidden text-zinc-900">
      <section className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8 mt-24">
        <span className={`font-semibold ${fontOutfit.className}`}>
          Carregando página...
        </span>
      </section>
    </main>
  )
}

export default Loading
