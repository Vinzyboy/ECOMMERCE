import React from "react";
import { imgPath } from "../helpers/functions-general";

const CardItem = ({ item, key }) => {
  return (
    <div className="new-collection-card" key={key}>
      <img
        src={`${imgPath}/${item.img}`}
        alt=""
        className="rounded-3xl w-[600px]"
      />
      <h3 className="font-semibold">{item.title}</h3>
      <p>{item.description}</p>
      <h4 className="font-semibold">{item.price}</h4>
    </div>
  );
};

export default CardItem;
