import Link from "next/link";

const Categories = () => {
  const arrCategories = [
    {
      id: 1,
      title: "Marketing e vendas",
      image:
        "https://appsumo2-cdn.appsumo.com/media/selfsubmissions/images/b829cf9f-e719-423d-8956-f345bd9a585f.webp?width=850",
      href: "/produtos",
      alt: "E-commerce software",
    },
    {
      id: 2,
      title: "BIY",
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-Exposure-_169_dx7J8Eh.png?width=850",
      href: "/produtos",
      alt: "Aplicativos software",
    },
    {
      id: 3,
      title: "Aplicativos de mídia",
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-Adilo.jpg?width=850",
      href: "/produtos",
      alt: "WEB software",
    },
    {
      id: 4,
      title: "Finanças",
      image:
        "https://appsumo2-cdn.appsumo.com/media/selfsubmissions/images/19962757-2f95-4fc7-ab26-970fd65ee912.jpg?width=850",
      href: "/produtos",
      alt: "WEB3 software",
    },
  ];

  return (
    <section className="grid lg:grid-cols-4 xs:grid-cols-2 xs:w-full lg:w-4/6 mx-auto xs:px-6 lg:px-0 mt-4 xs:gap-y-8 lg:gap-y-0 gap-x-2">
      {arrCategories.map((el) => (
        <Link
          href={el.href}
          className="cols-span-1 flex items-center flex-col gap-4"
          key={el.id}
        >
          <img
            src={el.image}
            alt={el.alt}
            className="w-full xs:h-56 lg:h-80 object-cover rounded-sm"
          />
          <strong className="font-sofia text-xl uppercase tracking-wider">
            {el.title}
          </strong>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
