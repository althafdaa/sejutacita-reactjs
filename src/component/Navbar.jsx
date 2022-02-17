import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [navOnScroll, setNavOnScroll] = useState(true);
  const scrolledPage = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 200) {
      setNavOnScroll(true);
    }
    setNavOnScroll(false);
  };

  window.addEventListener("scroll", scrolledPage);

  const MatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <header
      className={`container py-6 px-4  ${
        MatchRoute("/") ? "bg-blue-200" : "bg-white"
      } ${
        navOnScroll ? "rounded-b-lg" : "rounded-b-none"
      } rounded-b-xl h-20 fixed top-0`}
    >
      <nav className='flex gap-4 justify-between items-center'>
        {MatchRoute("/") ? (
          <>
            {" "}
            <Link to='/'>Booku</Link>
            <input
              className='border-2 rounded-lg w-full px-2'
              placeholder='Cari buku'
              type='text'
            />
            <FaBook className='text-xl' />
          </>
        ) : (
          <>
            {" "}
            <Link className='text-2xl font-bold' to='/'>
              {"<"}
            </Link>
            <div className='flex gap-4'>
              <FaBook className='text-xl' />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
