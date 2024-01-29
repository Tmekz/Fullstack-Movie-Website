import React from "react";
import { Link } from "react-router-dom";
import { linksNavbar } from "../constants/Constants";
import logo from "../assets/logo/TMK-LOGO-WHITE.svg";

const Navbar = () => {
  return (
    <div className="sticky w-full py-6 flex items-center justify-between z-50 ">
      <Link to={"/"}>
        <img src={logo} className="h-8 md:h-14" alt="" />
      </Link>
      <div className="">
        {linksNavbar.map((button, index) => (
          <Link
            className={`capitalize text-lg md:text-2xl  ${
              index === linksNavbar.length - 1
                ? "px-0, p-2 , rounded , bg-red-600"
                : "px-6"
            }  `}
            key={button.id}
            to={button.direction}
          >
            {button.name}
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
