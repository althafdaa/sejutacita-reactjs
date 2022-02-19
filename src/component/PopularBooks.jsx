import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PopularBooks = () => {
  const books = useSelector((state) => state.data.books);
  const random = Math.floor(Math.random() * books.length);

  return (
    <div className='bg-yellow-200 w-full order-3'>
      <h1 className='font-bold mb-2 py-2 px-4 md:text-xl'>
        Buku Populer Minggu ini
      </h1>

      <Swiper
        className='h-50'
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className='px-4 pb-2'>
          <Link to={`/books/${books[random].category_id}/${books[random].id}`}>
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[random].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[random].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[random + 1].category_id}/${
              books[random + 1].id
            }`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[random + 1].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[random + 1].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[random + 2].category_id}/${
              books[random + 2].id
            }`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[random + 2].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[random + 2].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[random].category_id}/${books[random + 3].id}`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[random + 3].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[random + 3].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-2'>
          <Link
            to={`/books/${books[random + 4].category_id}/${
              books[random + 4].id
            }`}
          >
            <img
              className='h-4/5 rounded-lg shadow mb-2'
              src={books[random + 4].cover_url}
              alt='buku'
            />
            <h1 className='text-xs font-semibold'>{books[random + 4].title}</h1>
            <p className='text-xs text-gray-400'>Happiness</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularBooks;
