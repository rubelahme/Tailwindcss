import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center bg-gray-400 p-3 flex-wrap">
      <Link href="#" className="p-2 mr-4 inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-black "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Motor Gerez
        </span>
      </Link>
      <button className="text-white inline-flex p-3 hover:bg-gray-900 rounder lg:hidden ml-auto">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>
      </button>
      <div
        className="hidden top-nav w-full lg:inline-flex
      lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounder text-black-400 hover:text-white hover:bg-gray-700 hover:rounder"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounder text-black-400 hover:text-white hover:bg-gray-700 hover:rounder"
          >
            <span>Dashboard</span>
          </Link>
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounder text-black-400 hover:text-white hover:bg-gray-700 hover:rounder"
          >
            <span>Contact Us</span>
          </Link>
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounder text-black-400 hover:text-white hover:bg-gray-700 hover:rounder"
          >
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
