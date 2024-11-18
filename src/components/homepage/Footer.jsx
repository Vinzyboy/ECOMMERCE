import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-20 pb-10">
        <div className="grid md:grid-cols-[4fr,_1fr,_1fr,_.8fr] gap-5 mb-5">
          <div>
            <img src={`${imgPath}/footerlogo.png`} alt="" className="h-20" />
            <p className="text-gray-500 w-[350px] font-semibold pb-10">
              Get newsletter update for upcomming product and best discount for
              all item
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Your Email"
                className="text-gray-500 rounded-full border-gray-500 border-2 w-[300px] p-3"
              />
              <Link
                to="/"
                className="p-3 px-10
             bg-black text-white rounded-full "
              >
                Submit
              </Link>
            </div>
          </div>
          <div className="footer-box">
            <h6 className="mb-5 font-semibold">Product</h6>
            <ul>
              <li>
                <Link to="/">Tshirt</Link>
              </li>
              <li>
                <Link to="/">Jacket</Link>
              </li>
              <li>
                <Link to="/">Shoes</Link>
              </li>
              <li>
                <Link to="/">Pants</Link>
              </li>
              <li>
                <Link to="/">Sunglasses</Link>
              </li>
              <li>
                <Link to="/">Tuxedo</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6 className="mb-5 font-semibold">Categories</h6>
            <ul>
              <li>
                <Link to="/">Man</Link>
              </li>
              <li>
                <Link to="/">Woman</Link>
              </li>
              <li>
                <Link to="/">Kids</Link>
              </li>
              <li>
                <Link to="/">Gift</Link>
              </li>
              <li>
                <Link to="/">New Arrival</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6 className="mb-5 font-semibold">Product</h6>
            <ul>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Youtube</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black w-full text-white md:flex md:justify-between px-5 py-5 font-semibold text-center">
        <div>
          <p>© 2023 Tulos production</p>
        </div>

        <div className="md:flex gap-5">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
