import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import Categories from "../component/Categories";
import CheckApp from "../component/CheckApp";
import PopularBooks from "../component/PopularBooks";
import Spinner from "../component/Spinner";
import TodaysRecommendation from "../component/TodaysRecommendation";
import Footer from "./../component/Footer";
import {
  getAllBooks,
  getAllCategories,
  loadLocalStorage,
} from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data.books);
  const loaded = useSelector((state) => state.data.loaded);

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
  console.log(books);

  return (
    <main className='container'>
      <Banner />
      <CheckApp />
      <TodaysRecommendation title='Rekomendasi Hari Ini' books={books} />
      <Categories />
      <PopularBooks books={books} />
      <Footer />
    </main>
  );
};

export default Home;
