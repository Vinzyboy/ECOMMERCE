import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner ">
      <div className="container">
        <img
          src={`${imgPath}/banner.jpg`}
          alt=""
          className="relative w-full max-h-[850px] object-cover rounded-3xl"
        />
        <div className="absolute bottom-10 left-10 text-white ">
          <div>
            <h1 className="font-semibold">TOLUS SPRING COLLECTION</h1>
            <p className="w-[600px]">
              Find out our best spring collection . Offering our best quality
              product in a Tolus Spring Collection{" "}
            </p>
          </div>
        </div>
        <div className="absolute bottom-[60px] right-14">
          <Link
            to="/"
            className="p-3 px-10
             bg-white text-black rounded-full "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
