import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Bookmark from "./pages/Bookmark";
import Category from "./pages/Category";

import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";

function App() {
  return (
    <div className='pt-20 flex justify-center'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:cat/:id' element={<SingleBook />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path='/bookmarks' element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
