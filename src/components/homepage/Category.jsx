import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const newCollectionArray = [
    {
      img: "card-7.png",
      title: "MAN",
      button: "See deatils",
    },
    {
      img: "card-8.png",
      title: "WOMAN",
      button: "See deatils",
    },
    {
      img: "card-9.png",
      title: "KIDS",
      button: "See deatils",
    },
    ];
  return (
    <section>
      <div className="container md:grid md:grid-cols-3 gap-5 flex flex-col py-20">
        {newCollectionArray.map((item, key) => (
          <CategoryItem item={item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Category;
