import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row gap-96 p-5 items-center justify-center">
        <h1 className="text-xl">MockUpGen</h1>
        <ul className="flex flex-row gap-10">
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/generate">
            <p>GENERATE</p>
          </NavLink>
        </ul>
      </div>
      <p className="max-w-screen-lg h-[0.5px] bg-[#414141] mx-auto"></p>

    </>
  );
};

export default NavBar;
