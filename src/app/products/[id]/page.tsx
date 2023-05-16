'use client'

import { ProductProps } from '@/types/product_props'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [productData, setProductData] = useState<ProductProps>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data)
      })
  }, [])

  return (
    <main className="overflow-x-hidden text-zinc-900">
      <section className="w-4/6 mx-auto flex flex-col gap-24 mt-24">
        <div className="grid grid-cols-10 gap-12">
          <section className="col-span-8">
            <img
              src={productData?.image}
              alt="Software product image"
              className="h-[40vh] w-full object-cover rounded-sm"
            />
          </section>
          <section className="col-span-2">{productData?.title}</section>
        </div>
      </section>
    </main>
  )
}

export default Product
