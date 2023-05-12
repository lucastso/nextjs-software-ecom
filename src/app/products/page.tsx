"use client";

import { categories } from "@/misc/categories";
import { categories_styles } from "@/misc/categories_styles";
import { fontOutfit, fontSofiaCondensed } from "@/misc/fonts";
import { ProductProps } from "@/types/product";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Paracord Z - Produtos",
  description: "Esse é o catálogo de produtos da Paracord Z",
};

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCategoria, setShowCategoria] = useState(false);
  const [showPlano, setShowPlano] = useState(false);
  const [showAudiencia, setShowAudiencia] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="overflow-x-hidden text-zinc-900">
      <section className="w-4/6 mx-auto flex flex-col gap-24 mt-24">
        <div className="grid grid-cols-10 gap-12">
          <div className="col-span-2 flex flex-col">
            <div
              className="pb-4 flex items-center justify-between cursor-pointer"
              onClick={() => setShowCategoria(!showCategoria)}
            >
              <span
                className={`${fontSofiaCondensed.className} text-xl font-sofia font-semibold`}
              >
                Categoria
              </span>
              {!showCategoria ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
            </div>
            <div
              className={`${showCategoria ? "flex flex-col" : "hidden"} gap-2`}
            >
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="categoria"
                  id=""
                />
                <span className={fontOutfit.className}>Marketing e vendas</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="categoria"
                  id=""
                />
                <span className={fontOutfit.className}>BIY</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="categoria"
                  id=""
                />
                <span className={fontOutfit.className}>Finanças</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="categoria"
                  id=""
                />
                <span className={fontOutfit.className}>Dev e TI</span>
              </div>
            </div>
            <div
              className="py-4 flex items-center justify-between cursor-pointer"
              onClick={() => setShowPlano(!showPlano)}
            >
              <span
                className={`${fontSofiaCondensed.className} text-xl font-sofia font-semibold`}
              >
                Plano
              </span>
              {!showPlano ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
            </div>
            <div className={`${showPlano ? "flex flex-col" : "hidden"} gap-2`}>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="plano"
                  id=""
                />
                <span className={fontOutfit.className}>Mensal</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="plano"
                  id=""
                />
                <span className={fontOutfit.className}>Único</span>
              </div>
            </div>
            <div
              className="py-4 flex items-center justify-between cursor-pointer"
              onClick={() => setShowAudiencia(!showAudiencia)}
            >
              <span
                className={`${fontSofiaCondensed.className} text-xl font-sofia font-semibold`}
              >
                Melhor para
              </span>
              {!showAudiencia ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
            </div>
            <div
              className={`${showAudiencia ? "flex flex-col" : "hidden"} gap-2`}
            >
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>Marketeiros</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>
                  Criadores de conteúdo
                </span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>Bloggers</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>Eugências</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>Influencers</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>SaaS</span>
              </div>
              <div className="flex items-center gap-2 font-outfit">
                <input
                  type="checkbox"
                  className="accent-violet-500"
                  name="audiencia"
                  id=""
                />
                <span className={fontOutfit.className}>Web designers</span>
              </div>
            </div>
          </div>

          {loading && (
            <div className="col-span-8 grid grid-cols-4 gap-x-4 gap-y-12">
              <span className={`font-semibold ${fontOutfit.className}`}>
                Carregando produtos...
              </span>
            </div>
          )}

          {!loading && (
            <div className="col-span-8 grid grid-cols-4 gap-x-4 gap-y-12">
              <div
                className={`flex flex-col col-span-4 ${fontOutfit.className}`}
              >
                <strong>Softwares</strong>
                <span>{products.length} produtos</span>
              </div>

              {products.map((product) => (
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
                      <span>{product.category?.category}</span>
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
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
