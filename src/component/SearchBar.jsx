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

  const inputRef = useRef(null);

  const searchHandler = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
      setClear(false);
    } else {
      const filtered = books.filter((book) => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredData(filtered);
      setShowSearch(true);
      setClear(true);
    }
  };

  const clearHandler = () => {
    setInputValue("");
    setShowSearch(false);
    setClear(false);
  };

  return (
    <div className='flex flex-col relative w-full'>
      <div className='w-full relative'>
        <input
          className='border-2 rounded-lg w-full px-2'
          placeholder='Cari buku'
          type='text'
          onChange={searchHandler}
          value={inputValue}
          ref={inputRef}
        />
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
      </div>
      {showSearch && (
        <div className='absolute top-7 w-full px-2 bg-white h-52 overflow-y-scroll'>
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
  );
};

export default SearchBar;
