import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-semibold text-gray-800">MockUpGen</h1>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/generate"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              activeClassName="text-blue-500"
            >
              Generate
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-lg h-[1px] bg-gray-300 mx-auto"></div>
    </div>
  );
};

export default NavBar;
