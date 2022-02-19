import React from "react";

const Footer = () => {
  const yearDate = new Date();
  return (
    <footer className='p-4 mt-auto border-t-2 w-full'>
      <div className='text-center'>
        <h1 className='text-xl font-bold'>
          Copyright © {yearDate.getFullYear()}
        </h1>
        <p className='text-xl'>PT SejutaCita Anak Muda Indonesia</p>
        <p>Made by Althaf Demiandra</p>
      </div>
    </footer>
  );
};

export default Footer;
