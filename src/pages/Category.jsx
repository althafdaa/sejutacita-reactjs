import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import { getAllCategories, getFewBooks } from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);
  const params = useParams();
  const fewBooks = useSelector((state) => state.data.booksCategory);

  const id = Number(params.cat);

  const pagination = fewBooks.length + 4;

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getFewBooks({ id: id, num: 4 }));
  }, [dispatch, id]);

  if (loaded) {
    setIsLoading(false);
    dispatch(dataLoaded(false));
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='container flex flex-col px-4'>
      <h1 className='text-xl font-bold mb-4'>
        {Number(params.cat) === 1 && "Happiness and Mindfulness"}
        {Number(params.cat) === 11 && "Career and Business"}
        {Number(params.cat) === 12 && "Productivity and Time Management"}
        {Number(params.cat) === 19 && "Society & Politics"}
        {Number(params.cat) === 121 && "Investment & Finance"}
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {fewBooks.map((book) => (
          <>
            <Link to={`/books/${book.category_id}/${book.id}`}>
              <img src={book.cover_url} alt='books' />

              <div className=''>
                <h2 className='font-bold'>{book.authors}</h2>
                <h3 className='font-semibold text-gray-400'>
                  {Number(params.cat) === 1 && "Happiness and Mindfulness"}
                  {Number(params.cat) === 11 && "Career and Business"}
                  {Number(params.cat) === 12 &&
                    "Productivity and Time Management"}
                  {Number(params.cat) === 19 && "Society & Politics"}
                  {Number(params.cat) === 121 && "Investment & Finance"}
                </h3>
              </div>
            </Link>
          </>
        ))}
      </div>
      <button
        className='text-center p-4 font-semibold hover:text-blue-400'
        onClick={() => dispatch(getFewBooks({ id, num: pagination }))}
      >
        Load more ...
      </button>
    </div>
  );
};

export default Category;
