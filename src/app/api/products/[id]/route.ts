import { NextResponse } from "next/server";
import { getProduct } from "../../../../../prisma/products";

export async function GET(request: Request) {
    const products = await getProduct("644be79d2ea5e84cfa0d4fa5");
    return NextResponse.json(products);
}
