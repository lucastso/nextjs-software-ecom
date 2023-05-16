import { NextResponse } from 'next/server'
import { getProduct } from '../../../../../prisma/products'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const products = await getProduct(id)

  return NextResponse.json(products)
}
