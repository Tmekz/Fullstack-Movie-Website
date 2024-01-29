import React from "react";
import { Link } from "react-router-dom";
import { linksNavbar } from "../constants/Constants";
import logo from "../assets/logo/TMK-LOGO-WHITE.svg";

const Navbar = () => {
  return (
    <div className="absolute w-full px-4 md:px-12 py-6 flex items-center justify-between z-50 min-w-[360px]">
      <Link to={"/"}>
        <img src={logo} className="h-8 md:h-14" alt="TMK-DEV Logo" />
      </Link>
      <div className="">
        {linksNavbar.map((button, index) => (
          <Link
            className="hover:brightness-75 "
            key={button.id}
            to={button.direction}
          >
            <button
              className={`capitalize text-lg md:text-2xl py-2 px-4  ${
                index === linksNavbar.length - 1
                  ? " , rounded , bg-red-600"
                  : ""
              }  `}
            >
              {button.name}
            </button>
          </Link>
        ))}
        {/* <Link to={"/login"}>
          {" "}
          <button className="capitalize pr-4">login</button>
        </Link>
        <Link to={"/signup"}>
          {" "}
          <button className="capitalize px-6 py-2 rounded cursor-pointer bg-blue-600">
            sign up
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
