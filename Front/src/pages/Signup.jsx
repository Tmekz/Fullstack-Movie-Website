import React from "react";
import netflixBackground from "../assets/pictures/Netflix Background.webp";

const Signup = () => {
  return (
    <>
      <div className="h-screen w-full">
        <img
          className="hidden h-full w-full object-cover sm:block"
          src={netflixBackground}
          alt="netflix not logged in background"
        />
        <div className="fixed left-0 top-0 flex h-screen w-full  items-center justify-center bg-black/70">
          <div className="fixed z-20 mt-20 h-full w-full bg-black/70  py-0 md:mt-0 md:h-[70vh] md:w-[50vw] md:max-w-[500px]">
            <div className="h-full w-full flex-col px-[48px] py-[68px]">
              <header>
                <h1 className="mb-10 text-4xl">Sign In</h1>
              </header>
              <form className="flex w-full flex-col space-y-4" action="">
                <input
                  className="bg-gray-900/80 p-3"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <input
                  className="bg-gray-900/80 p-3"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </form>
              <footer className="">
                <button className="mt-4 w-full bg-red-600 py-2">
                  {" "}
                  Sign In
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
