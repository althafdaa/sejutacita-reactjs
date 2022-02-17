import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
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
          <Route path='/books/:id' element={<SingleBook />} />
          <Route path='/category/:cat' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
