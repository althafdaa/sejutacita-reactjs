import React, { useState, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const books = useSelector((state) => state.data.books);
  const [filteredData, setFilteredData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [clear, setClear] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [byTitle, setByTitle] = useState(true);

  const inputRef = useRef(null);

  const searchHandlerTitle = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
      setClear(false);
    } else {
      const filtered = books.filter((book) => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      if (filtered) {
        setFilteredData(filtered);
        setShowSearch(true);
        setClear(true);
      } else {
        setShowSearch(false);
      }
    }
  };

  const searchByAuthor = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
      setClear(false);
    } else {
      const filtered = books.find((book) => {
        const data = new RegExp(book.authors.join("|"), "i");
        return data.test(e.target.value.toLowerCase());
      });

      if (filtered !== undefined) {
        setFilteredData([filtered]);
        setShowSearch(true);
        setClear(true);
      }
    }
  };

  const clearHandler = () => {
    setInputValue("");
    setShowSearch(false);
    setClear(false);
  };

  return (
    <div className='flex gap-2 items-center relative w-full'>
      <button
        onClick={() => setByTitle((prev) => !prev)}
        className='px-2 font-semibold hover:bg-blue-100'
      >
        {byTitle ? "Title" : "Author"}
      </button>
      <div className='w-full relative flex flex-col'>
        {byTitle ? (
          <input
            className='border-2 rounded-lg w-full px-2'
            placeholder='Cari judul buku'
            type='text'
            onChange={searchHandlerTitle}
            value={inputValue}
            ref={inputRef}
          />
        ) : (
          <input
            className='border-2 rounded-lg w-full px-2'
            placeholder='Cari penulis buku'
            type='text'
            onChange={searchByAuthor}
            value={inputValue}
            ref={inputRef}
          />
        )}
        {!clear ? (
          <FaSearch
            className='absolute right-2 top-1 text-gray-400 cursor-pointer'
            onClick={() => inputRef.current.focus()}
          />
        ) : (
          <FaTimes
            className='absolute right-2 top-1 text-gray-400'
            onClick={clearHandler}
          />
        )}
        {showSearch && (
          <div className='absolute top-7 w-full px-2 bg-white max-h-44 overflow-y-scroll'>
            {filteredData.map((book) => (
              <Link
                to={`/books/${book.category_id}/${book.id}`}
                key={book.id}
                className='w-full hover:bg-blue-100'
              >
                <div className=' hover:bg-blue-100 py-1 border-b-2'>
                  {book.title}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
