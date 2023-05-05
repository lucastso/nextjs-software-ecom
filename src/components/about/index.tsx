"use client";

import { fontOutfit, fontSofiaCondensed } from "@/misc/fonts";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { useState } from "react";

const About = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  return (
    <div className="xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 flex flex-col gap-8">
      <span
        className={`font-semibold text-2xl tracking-wider ${fontSofiaCondensed.className}`}
      >
        O DESTINO DO MARKETPLACE DE SOFTWARE
      </span>

      <div className={`flex flex-col gap-4 ${fontOutfit.className}`}>
        <span>
          A Paracord Z é uma loja online de software fundada em 2021 por um
          grupo de amigos com uma visão comum: oferecer software de alta
          qualidade a preços acessíveis. Inspirados, os fundadores da Paracord Z
          queriam criar uma marca que fosse sinônimo de funcionalidade e
          praticidade.
        </span>
        <span className={`${showMoreAbout ? "hidden" : "block"}`}>...</span>
        <span className={`${!showMoreAbout ? "hidden" : "block"}`}>
          Com o tempo, a Paracord Z se tornou uma das lojas online de software
          mais populares da internet, com clientes em todo o mundo. Seu catálogo
          inclui softwares para diversas finalidades.
        </span>
        <span className={`${!showMoreAbout ? "hidden" : "block"}`}>
          Se você está procurando software de alta qualidade a preços
          acessíveis, não precisa procurar mais do que a Paracord Z. Com sua
          combinação única de funcionalidade e atendimento ao cliente
          excepcional, a Paracord Z é a escolha perfeita para aqueles que
          procuram softwares confiáveis.
        </span>
      </div>

      <span
        className={`font-semibold text-2xl tracking-wider self-center cursor-pointer ${fontSofiaCondensed.className}`}
        onClick={() => setShowMoreAbout(!showMoreAbout)}
      >
        {showMoreAbout ? (
          <div className="flex items-center gap-2">
            <span>LER MENOS</span>
            <ArrowLeft size={16} weight="bold" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>LER MAIS</span>
            <ArrowRight size={16} weight="bold" />
          </div>
        )}
      </span>
    </div>
  );
};

export default About;
