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
      <div className="container">
        <div className="title pt-20 text-center items-center">
          <h3>NEW COLLECTION</h3>
          <p className="">
            Our latest collection, where classic and contemporary styles
            converge in perfect harmony
          </p>
        </div>
        <div
          className="newcollection_wrapper grid grid-cols-3 pt-10
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
