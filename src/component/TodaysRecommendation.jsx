import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodaysRecommendation = ({ title, input }) => {
  const books = useSelector((state) => state.data.books);
  // const randomBooks = Math.floor(Math.random() * books.length);
  // const textSlice = books[randomBooks].description.slice(0, 100);

  return (
    <>
      <div className='py-2 px-4 w-full'>
        <h1 className='font-bold mb-2 md:text-xl'>{title}</h1>
        <div className='h-72 flex shadow-md mb-4 p-4'>
          <div className='w-3/5 h-full'>
            {/* <img
              className='h-full rounded-lg max-h-64'
              src={books[input].cover_url}
              alt='buku'
            /> */}
            <div
              className='h-full rounded-lg max-h-64 w-full'
              style={{
                background: `url(${[books[input].cover_url]}) center no-repeat`,
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <div className='w-2/5 h-full flex flex-col justify-end gap-4'>
            <h1 className='text-2xl font-bold'>{books[input].title}</h1>
            <p className='text-xl'>{books[input].description}</p>
            <Link
              to={`/books/${books[input].category_id}/${books[input].id}`}
              className='px-4 py-2 bg-blue-200 hover:bg-blue-400 hover:font-bold text-sm font-semibold rounded text-center transition-all'
            >
              Baca Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaysRecommendation;
