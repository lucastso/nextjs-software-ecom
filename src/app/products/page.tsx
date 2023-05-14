import { fontOutfit, fontSofiaCondensed } from "@/misc/fonts";
import { ProductProps } from "@/types/product_props";
import { ProductPropsArray } from "@/types/product_props_array";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<
  ProductPropsArray
> = async () => {
  try {
    const response = await fetch("/api/products");
    const data = await response.json();
    const products: ProductProps[] = data.products;

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};

const Products = ({ products }: ProductPropsArray) => {
  return (
    <main className="overflow-x-hidden text-zinc-900">
      <section className="w-4/6 mx-auto flex flex-col gap-24 mt-24">
        <div className="grid grid-cols-10 gap-12">
          <div className="col-span-8 grid grid-cols-4 gap-x-4 gap-y-12">
            <div className={`flex flex-col col-span-4 ${fontOutfit.className}`}>
              <strong>Softwares</strong>
              <span>
                {products
                  ? `${products.length} produtos`
                  : "Sem produtos disponíveis :("}
              </span>
            </div>

            {products?.map((product) => (
              <Link
                href={`/products/${product.id}`}
                className="flex flex-col items-center justify-center gap-4"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt="Terno"
                  className="rounded-sm object-cover h-80"
                />
                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="flex items-center justify-between w-full">
                    <span>{product.title}</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="line-through text-xs">
                      {"R$ " +
                        Math.round(product.price + 100)
                          .toFixed(2)
                          .replace(".", ",")}
                    </span>
                    <div className="flex xs:flex-col lg:flex-row gap-1 items-center">
                      <span className="text-xl font-semibold font-sofia">
                        {"R$ " +
                          Math.round(product.price)
                            .toFixed(2)
                            .replace(".", ",")}
                      </span>
                      <span>/único</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
