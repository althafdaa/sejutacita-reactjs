import React from "react";
import { Link } from "react-router-dom";

const TodaysRecommendation = ({ books, title }) => {
  const randomBooks = Math.floor(Math.random() * books.length);

  const textSlice = books[randomBooks].description.slice(0, 100);

  return (
    <>
      <div className='py-2 px-4'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <div className='h-40 flex bg-blue-200 shadow-lg mb-4 p-4 gap-2'>
          <div className='w-2/5 h-full'>
            <img
              className='h-full'
              src={books[randomBooks].cover_url}
              alt='buku'
            />
          </div>
          <div className='w-3/5 h-full flex flex-col justify-between'>
            <p className='text-xs'>{textSlice}</p>
            <Link
              to={`/books/${books[randomBooks].category_id}/${books[randomBooks].id}`}
              className='px-4 bg-purple-400 text-white text-sm font-semibold rounded text-center'
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
