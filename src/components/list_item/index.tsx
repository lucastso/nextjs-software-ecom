import React from "react";

const ListItems = () => {
  const arrProducts = [
    {
      id: 1,
      title: "Item 1",
      tag: "Shoes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 150,
      image: "image",
    },
    {
      id: 2,
      title: "Item 2",
      tag: "Shoes 2",
      desc: "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 152,
      image: "image 2",
    },
    {
      id: 3,
      title: "Item 3",
      tag: "Shoes 3",
      desc: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 153,
      image: "image 3",
    },
    {
      id: 4,
      title: "Item 4",
      tag: "Shoes 4",
      desc: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 154,
      image: "image 4",
    },
    {
      id: 5,
      title: "Item 3",
      tag: "Shoes 3",
      desc: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 153,
      image: "image 3",
    },
    {
      id: 6,
      title: "Item 4",
      tag: "Shoes 4",
      desc: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Pariatur in soluta officiis. At doloribus voluptatum facere ratione consectetur quo nostrum illo optio a rerum magni voluptatibus dignissimos, aperiam consequuntur aliquid.",
      price: 154,
      image: "image 4",
    },
  ];

  return (
    <section className="w-4/6 mx-auto">
      <div className="mb-8">
        <strong className="text-2xl">Shoes</strong>
      </div>

      <div className="grid lg:grid-cols-3 xs:grid-cols-2 items-center gap-8">
        {arrProducts.map((el) => (
          <div className="col-span-1 flex flex-col" key={el.id}>
            <span>{el.tag}</span>
            <span>{el.title}</span>
            <span>{el.price}</span>
            <span>{el.image}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListItems;
