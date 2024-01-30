import React, { useState } from "react";
import netflixBackground from "../assets/pictures/Netflix Background.webp";
import { Link } from "react-router-dom";

const Signup = () => {
  // state to keep in memory
  const [email, setEmail] = useState("");
  const [rememberLogin, setRememberLogin] = useState(true);
  const [password, setPassword] = useState("");

  // handle submit on click
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen min-w-[360px] ">
      <img
        className="hidden h-full w-full object-cover sm:block"
        src={netflixBackground}
        alt="netflix not logged in background"
      />
      <div className="fixed left-0 top-0 flex h-screen w-full  items-center justify-center bg-black/70">
        <div className="fixed z-20 mt-20 h-full w-full bg-black/70  py-0 sm:mt-0 sm:h-[70vh] sm:w-[50vw] sm:max-w-[500px]">
          <div className="h-full w-full min-w-[360px] flex-col px-[30px] py-[68px]">
            <header>
              <h1 className="mb-10 text-4xl">Sign In</h1>
            </header>
            <form className="flex w-full flex-col space-y-4 rounded" action="">
              <input
                className="bg-gray-900/80 p-3"
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="rounded bg-gray-900/80 p-3"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <footer className="">
              <button className="mt-4 w-full rounded bg-red-600 py-2 font-bold">
                {" "}
                Sign In
              </button>
            </footer>
            <div className="mt-4 flex items-center justify-between text-gray-600">
              <p>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberLogin}
                  onChange={(e) => setRememberLogin(!rememberLogin)}
                />
                Remember me
              </p>
              <p>Need help ?</p>
            </div>
            <p className="my-4">
              <span className="mr-2 text-gray-600">
                Already subscribed to Netflix ?
              </span>
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
