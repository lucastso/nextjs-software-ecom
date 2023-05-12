import { NextResponse } from "next/server";
import { getAllProducts } from "../../../../prisma/products";

export async function GET(request: Request) {
  const products = await getAllProducts();
  return NextResponse.json(products);
}
