import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { linksNavbar } from "../constants/Constants";
import logo from "../assets/logo/TMK-LOGO-WHITE.svg";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("logged out successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute z-50 flex w-full min-w-[360px] items-center justify-between px-4 py-6 md:px-12">
      <Link to={"/"}>
        <img src={logo} className="h-8 md:h-10" alt="TMK-DEV Logo" />
      </Link>

      {user?.email ? (
        <div className="">
          {linksNavbar.map((button, index) => (
            <Link
              className="hover:brightness-75 "
              key={button.id}
              to={button.directionLoged}
            >
              <button
                onClick={index === 0 ? handleLogout : undefined}
                className={`px-4 py-2 text-lg capitalize md:text-2xl  ${
                  index === linksNavbar.length - 1 ? "" : ""
                }  `}
              >
                {button.nameLoged}
              </button>
            </Link>
          ))}
        </div>
      ) : (
        <div className="">
          {linksNavbar.map((button, index) => (
            <Link
              className="hover:brightness-75 "
              key={button.id}
              to={button.direction}
            >
              <button
                className={`px-4 py-2 text-lg capitalize md:text-2xl  ${
                  index === linksNavbar.length - 1 ? "  " : ""
                }  `}
              >
                {button.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

{
  /* <Link to={"/login"}>
  {" "}
  <button className="capitalize pr-4">login</button>
</Link>
<Link to={"/signup"}>
  {" "}
  <button className="capitalize px-6 py-2 rounded cursor-pointer bg-blue-600">
    sign up
  </button>
</Link> */
}
