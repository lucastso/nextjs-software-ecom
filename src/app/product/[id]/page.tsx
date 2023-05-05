import React from "react";

export async function generateMetadata({}) {
  const data = {
    title: "a",
  };

  return { title: data.title };
}

const Product = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default Product;
