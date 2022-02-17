import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.data.categories);

  console.log(categories);

  return (
    <>
      <div className='py-2 px-4'>
        {" "}
        <h1 className='font-bold mb-2'>Kategori</h1>
        <Swiper
          className='mb-4'
          spaceBetween={20}
          slidesPerView={"1"}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide
              key={cat.id}
              className='p-2 font-semibold text-gray-600 text-xs rounded-lg text-center bg-blue-100'
            >
              <Link to={`/category/${cat.name}`}>{cat.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
