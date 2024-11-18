import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Wedding = () => {
  return (
    <section>
      <div className="container pt-40">
        <img
          src={`${imgPath}/secondbanner.png`}
          alt=""
          className="w-full rounded-3xl md:h-auto h-[200px] object-cover"
        />
        <div className="text-center gap-5 py-10">
          <h1 className="font-bold">WEAR TO WEDDING</h1>
          <p className="text-gray-500 font-semibold pb-10">
            A symphony of exquisite designs tailored for your unforgettable moments 
          </p>
          <Link
            to="/"
            className="p-3 px-10
             bg-black text-white rounded-full "
          >
            See details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
