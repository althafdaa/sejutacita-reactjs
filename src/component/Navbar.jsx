import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
            <SearchBar />
            <Link to='bookmark'>
              {" "}
              <FaBook className='text-xl' />
            </Link>
          </>
        ) : (
          <>
            <button className='text-2xl font-bold' onClick={() => navigate(-1)}>
              {"<"}
            </button>
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
