import { Search, ShoppingBasket } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <ul className="flex gap-5 font-semibold">
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>New & Featured</li>
            <li>Gift</li>
          </ul>

          <div className="logo ">
            <h1 className="font-bold">TULOS</h1>
          </div>

          <ul className="flex gap-5">
            <li>
              <button>
                <Search strokeWidth={1} />
              </button>
            </li>
            <li>
              <button>
                <ShoppingBasket strokeWidth={1} />
              </button>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
