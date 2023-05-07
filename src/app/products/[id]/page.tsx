"use client";

import { ProductProps } from '@/types/product';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [productData, setProductData] = useState<ProductProps>()
  const {id} = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <div>{productData?.title}</div>
  )
}

export default Product