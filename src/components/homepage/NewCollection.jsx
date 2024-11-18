import React from "react";
import CardItem from "./CardItem";

const NewCollection = () => {
  const newCollectionArray = [
    {
      img: "card-1.png",
      title: "Lara Piana",
      description: "Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price: "$45",
    },
    {
      img: "card-2.png",
      title: "White Pants",
      description: "Slim Fit man pants",
      price: "$90",
    },
    {
      img: "card-3.png",
      title: "Bidha Glasses",
      description: "Black Glasses with luxury finishing",
      price: "$50",
    },
    {
      img: "card-4.png",
      title: "Brown Bomber",
      description: "Luxury unisex bomber jacket",
      price: "$52",
    },
    {
      img: "card-5.png",
      title: "Leather Shoes Jack",
      description: "Man leather shoes",
      price: "$89",
    },
    {
      img: "card-6.png",
      title: "Grey Tshirt",
      description: "Unisex tshirt",
      price: "$21",
    },
  ];

  return (
    <section>
      <div className="container pt-40">
        <div className="title text-center items-center">
          <h1 className="font-bold">NEW COLLECTION</h1>
          <p className="text-gray-500 font-semibold">
            Our latest collection, where classic and contemporary styles
            converge in perfect harmony
          </p>
        </div>
        <div
          className="newcollection_wrapper md:grid md:grid-cols-3 py-10 gap-10 
        "
        >
          {newCollectionArray.map((item, key) => (
            <CardItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
