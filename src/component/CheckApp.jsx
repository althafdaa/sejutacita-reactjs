import React from "react";

const CheckApp = () => {
  return (
    <>
      <div className='py-2 px-4'>
        <a
          href='https://play.google.com/store/apps/details?id=id.sejutacita'
          target='_blank'
          rel='noreferrer'
          className='flex items-center justify-between px-2 shadow-lg py-4 mb-4'
        >
          <span className='text-3xl'>🔥</span>
          Check aplikasi SejutaCita
          <span className='text-3xl font-bold'>{">"}</span>
        </a>
      </div>
    </>
  );
};

export default CheckApp;
