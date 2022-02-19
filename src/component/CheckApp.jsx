import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CheckApp = () => {
  return (
    <div className='py-2 px-4'>
      <a
        href='https://play.google.com/store/apps/details?id=id.sejutacita'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-between px-2 shadow-lg py-4'
      >
        <span className='text-3xl'>🔥</span>
        Check aplikasi SejutaCita
        <FaChevronRight className='text-3xl font-bold' />
      </a>
    </div>
  );
};

export default CheckApp;
