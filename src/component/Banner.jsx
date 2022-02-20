import React from "react";
import imageBanner from "./../assets/banner.jpg";
import illustBanner from "./../assets/phone.png";

const Banner = () => {
  return (
    <div
      className='shadow py-24 md:py-52 w-full mb-4 text-white relative'
      style={{
        background: `url(${imageBanner}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className='px-4 w-full flex items-center justify-center relative'>
        <div className='font-bold grid grid-cols-1 md:grid-cols-2 gap-12 items-center container'>
          <div className='text-center md:text-right'>
            <h1 className='text-6xl mb-2'>Booku by SejutaCita</h1>
            <p className='mb-2'>Now is available in your browser</p>
            <p className='mb-2 font-medium'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              deleniti iure quidem esse expedita dolorum blanditiis perspiciatis
              aliquam quae quasi, cum unde vero voluptatum fugit magni aliquid
              quis, quaerat pariatur?
            </p>
            <button className='px-4 py-2 rounded-lg shadow-lg border-2 border-black hover:bg-slate-100 hover:text-black transition-all'>
              Check out our deals
            </button>
          </div>

          <div className='hidden md:block lg:h-[480px] lg:w-[480px] md:h-96 md:w-96 bg-white opacity-20 hover:opacity-50 hover:shadow-lg rounded-full absolute md:right-0 lg:right-4 xl:right-36 transition-all'></div>
          <img
            className='hidden md:block w-64  absolute md:right-14 lg:right-32 xl:right-64'
            src={illustBanner}
            alt='gambar'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
