import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.data.categories);
  const navigate = useNavigate();

  return (
    <>
      <div className='py-2 px-4'>
        {" "}
        <h1 className='font-bold mb-2'>Kategori</h1>
        <Swiper
          className='mb-4 text-center'
          spaceBetween={20}
          slidesPerView={"auto"}
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
              className='font-semibold text-gray-600 rounded-lg text-center bg-blue-100 w-full cursor-pointer'
              onClick={() => navigate(`/category/${Number(cat.id)}`)}
            >
              <Link to={`/category/${Number(cat.id)}`}>{cat.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
