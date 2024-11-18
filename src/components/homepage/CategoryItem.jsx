import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const CategoryItem = ({ item, key }) => {
  return (
    <div className="category-card relative md:pt-40 " key={key}>
      <img
        src={`${imgPath}/${item.img}`}
        alt=""
        className="rounded-3xl w-full h-[800px] object-cover"
      />

      <div className="absolute bottom-10 left-10">
        <h1 className="text-white pb-5 font-semibold tracking-wide">
          {item.title}
        </h1>
        <Link
          to="/"
          className="p-3 px-[50px]
             bg-white text-black rounded-full font-semibold"
        >
          {item.button}
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
