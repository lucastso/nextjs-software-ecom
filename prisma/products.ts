import { prisma } from "@/lib/prisma";

export const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  
  return products;
};

export const getProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  return product;
};
