import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner ">
      <div className="container pt-[67px] md:pt-[130px]">
        <img
          src={`${imgPath}/banner.jpg`}
          alt=""
          className="relative w-full md:max-h-[850px] object-cover rounded-3xl"
        />
        <div className="absolute md:bottom-10 md:left-10 text-white bottom-[26rem] px-3">
          <div>
            <h1 className="font-semibold text-[30px] md:text-6xl">TOLUS SPRING COLLECTION</h1>
            <p className="md:w-[600px] text-sm w-[400px]">
              Find out our best spring collection . Offering our best quality
              product in a Tolus Spring Collection{" "}
            </p>
          </div>
        </div>
        <div className="absolute md:bottom-[60px] md:right-14 bottom-[23rem] right-[10rem]">
          <Link
            to="/"
            className="p-3 px-10
             bg-white text-black rounded-full font-semibold"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
