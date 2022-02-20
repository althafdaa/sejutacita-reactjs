import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import Categories from "../component/Categories";
import CheckApp from "../component/CheckApp";
import PopularBooks from "../component/PopularBooks";
import Spinner from "../component/Spinner";
import TodaysRecommendation from "../component/TodaysRecommendation";
import {
  getAllBooks,
  getAllCategories,
  loadLocalStorage,
} from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);
  const books = useSelector((state) => state.data.books);
  const random = Math.floor(Math.random() * books.length);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBooks());
    dispatch(loadLocalStorage());
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
      <Banner />
      <main className='container grid grid-cols-1'>
        <CheckApp />
        <Categories />
        <div className='mb-8 grid gap-4 grid-cols-1 md:grid-cols-2 order-3'>
          <TodaysRecommendation title='Best Seller' input={1} />
          <TodaysRecommendation
            title='Rekomendasi Hari Ini'
            input={random + 1}
          />
        </div>
        <PopularBooks input={random} />
      </main>
    </>
  );
};

export default Home;
