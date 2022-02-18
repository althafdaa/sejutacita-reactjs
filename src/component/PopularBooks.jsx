import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const PopularBooks = ({ books }) => {
  const randomOne = Math.floor(Math.random() * books.length);
  const randomTwo = Math.floor(Math.random() * books.length);
  const randomThree = Math.floor(Math.random() * books.length);
  const randomFour = Math.floor(Math.random() * books.length);
  const randomFive = Math.floor(Math.random() * books.length);

  return (
    <div className='bg-yellow-200'>
      <h1 className='font-bold mb-2 py-2 px-4'>Buku Populer Minggu ini</h1>
      <Swiper className='h-50' slidesPerView={3}>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[randomOne].category_id}/${books[randomOne].id}`}
          >
            {" "}
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[randomOne].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[randomOne].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[randomTwo].category_id}/${books[randomTwo].id}`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[randomTwo].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[randomTwo].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[randomThree].category_id}/${books[randomThree].id}`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[randomThree].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>
              {books[randomThree].title}
            </h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[randomFour].category_id}/${books[randomFour].id}`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[randomFour].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[randomFour].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[randomFive].category_id}/${books[randomFive].id}`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[randomFive].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[randomFive].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularBooks;
