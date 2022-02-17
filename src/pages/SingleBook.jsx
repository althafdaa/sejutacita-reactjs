import React, { useEffect, useState } from "react";
import {
  FaBookReader,
  FaHeadphones,
  FaHeart,
  FaMusic,
  FaShareAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import { getAllBooks } from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Alert from "../component/Alert";
// import "react-accessible-accordion/dist/fancy-example.css";

const SingleBook = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data.books);
  const loaded = useSelector((state) => state.data.loaded);

  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setisCopied] = useState(false);

  let booksMap = books.map((book) => book);
  const bookById = booksMap.filter((book) => book.id === Number(params.id))[0];

  const onShareHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setisCopied(true);
    setTimeout(() => {
      setisCopied(false);
    }, 2000);
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (loaded) {
    setIsLoading(false);
    dispatch(dataLoaded(false));
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <main className='w-full px-4 py-2 container'>
        {isCopied && <Alert text='Link Copied 🔔' />}
        <div className='h-64 mb-4 flex justify-center relative'>
          <img
            className='h-full shadow-xl'
            src={bookById.cover_url}
            alt='cover'
            onClick={onShareHandler}
          />
          <FaShareAlt
            className='absolute bottom-[50%] text-gray-200 text-3xl cursor-pointer  hover:text-blue-500 transition-all'
            onClick={onShareHandler}
          />
        </div>
        <div className='flex gap-4 mb-4 justify-center'>
          <button className='flex items-center justify-center gap-4 px-6 py-2 w-1/4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-gray-200 transition'>
            <FaHeadphones className='hidden sm:block' /> Dengar
          </button>
          <button className='flex items-center justify-center gap-4 px-6 py-2 w-1/4 border-2 bg-blue-600 text-white rounded-lg hover:bg-gray-400 transition'>
            <FaBookReader className='hidden sm:block' /> Baca
          </button>
          <button className='flex items-center justify-center gap-4 px-6 py-2 w-1/4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-pink-200 transition'>
            <FaHeart className='hidden sm:block' /> Bookmark
          </button>
        </div>
        <div className='pb-2 mb-4 border-b-2'>
          <h1 className='font-bold'>{bookById.title}</h1>
          <h2 className='font-semibold text-sm'>{bookById.authors}</h2>
        </div>
        <div className='pb-2 mb-4 border-b-2 flex gap-2'>
          <h2 className='font-semibold'>
            Audio Books : {bookById.audio_length} menit
          </h2>
          <FaMusic />
        </div>
        <div className='pb-2 mb-4 border-b-2'>
          <h2 className='font-semibold'>Tentang buku ini ?</h2>
          <p>{bookById.description}</p>
        </div>
        <div className='pb-2 mb-4'>
          <h2 className='font-semibold mb-2'>Apa saja di dalamnya?</h2>
          <Accordion>
            {bookById.sections.map((section) => (
              <AccordionItem className='mb-2'>
                <AccordionItemHeading>
                  <AccordionItemButton className='font-semibold text-blue-500 hover:text-blue-700'>
                    {section.title}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className='text-sm text-gray-400'>{section.content}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
};

export default SingleBook;
