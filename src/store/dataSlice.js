import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  books: [],
  booksByCategory: [],
  loaded: false,
  happiness: [],
  career: [],
  productivity: [],
  society: [],
  investment: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataLoaded(state, action) {
      state.loaded = action.payload;
    },
    getBooks(state, action) {
      state.books = action.payload;
    },
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getBooksByCategories(state, action) {
      state.booksByCategory = action.payload;
    },
    HappinessAndMindfulBooks(state, action) {
      state.happiness = action.payload;
    },
    CareerBooks(state, action) {
      state.career = action.payload;
    },
    ProductivityBooks(state, action) {
      state.productivity = action.payload;
    },
    SocietyBooks(state, action) {
      state.society = action.payload;
    },
    InvestmentBooks(state, action) {
      state.investment = action.payload;
    },
  },
});

export const {
  getBooks,
  dataLoaded,
  getCategories,
  getBooksByCategories,
  HappinessAndMindfulBooks,
  ProductivityBooks,
  SocietyBooks,
  CareerBooks,
  InvestmentBooks,
} = dataSlice.actions;

export default dataSlice.reducer;
