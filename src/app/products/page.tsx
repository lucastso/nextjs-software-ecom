"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import useFetch from "@/hooks/useFetch";
import { categories } from "@/misc/categories";
import { categories_styles } from "@/misc/categories_styles";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const [showCategoria, setShowCategoria] = useState(false);
  const [showPlano, setShowPlano] = useState(false);
  const [showAudiencia, setShowAudiencia] = useState(false);

  const { data, loading, error } = useFetch("/products");

  const convertTitleToSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <main className="overflow-x-hidden font-outfit text-zinc-900">
      <Navbar />
      <section className="w-4/6 mx-auto flex flex-col gap-24 mt-24">
        {loading && (
          <div className="min-h-[50vh] col-span-8 flex justify-center gap-2">
            <strong>Carregando... </strong>
            <img
              src="https://www.svgrepo.com/show/315795/spinner.svg"
              alt="Spinner image"
              className="animate-spin w-6 h-6"
            />
          </div>
        )}
        {error && (
          <div className="min-h-[50vh] col-span-8 flex justify-center">
            <strong>Erro, tente novamente mais tarde! :(</strong>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-10 gap-12">
            <div className="col-span-2 flex flex-col">
              <div
                className="pb-4 flex items-center justify-between cursor-pointer"
                onClick={() => setShowCategoria(!showCategoria)}
              >
                <span className="text-xl font-sofia font-semibold">
                  Categoria
                </span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
              <div
                className={`${
                  showCategoria ? "flex flex-col" : "hidden"
                } gap-2`}
              >
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="categoria"
                    id=""
                  />
                  <span>Marketing e vendas</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="categoria"
                    id=""
                  />
                  <span>BIY</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="categoria"
                    id=""
                  />
                  <span>Finanças</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="categoria"
                    id=""
                  />
                  <span>Dev e TI</span>
                </div>
              </div>
              <div
                className="py-4 flex items-center justify-between cursor-pointer"
                onClick={() => setShowPlano(!showPlano)}
              >
                <span className="text-xl font-sofia font-semibold">Plano</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
              <div
                className={`${showPlano ? "flex flex-col" : "hidden"} gap-2`}
              >
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="plano"
                    id=""
                  />
                  <span>Mensal</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="plano"
                    id=""
                  />
                  <span>Único</span>
                </div>
              </div>
              <div
                className="py-4 flex items-center justify-between cursor-pointer"
                onClick={() => setShowAudiencia(!showAudiencia)}
              >
                <span className="text-xl font-sofia font-semibold">
                  Melhor para
                </span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
              <div
                className={`${
                  showAudiencia ? "flex flex-col" : "hidden"
                } gap-2`}
              >
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Marketeiros</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Criadores de conteúdo</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Bloggers</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Eugências</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Influencers</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>SaaS</span>
                </div>
                <div className="flex items-center gap-2 font-outfit">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                    name="audiencia"
                    id=""
                  />
                  <span>Web designers</span>
                </div>
              </div>
            </div>

            <div className="col-span-8 grid grid-cols-4 gap-x-4 gap-y-12 min-h-[50vh]">
              <div className="flex flex-col col-span-4">
                <strong>Softwares</strong>
                <span>{data.length} produtos</span>
              </div>
              {data.map((product) => (
                <Link
                  href={`/produtos/${product.id}/${convertTitleToSlug(
                    product.title
                  )}`}
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
                      <span
                        className={`rounded-full ${
                          categories_styles[product.category_id]
                        } px-3 text-xs`}
                      >
                        {categories[product.category_id]}
                      </span>
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
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Products;
