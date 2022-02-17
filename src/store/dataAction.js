import {
  CareerBooks,
  dataLoaded,
  getBooks,
  getBooksByCategories,
  getCategories,
  HappinessAndMindfulBooks,
  InvestmentBooks,
  ProductivityBooks,
  SocietyBooks,
} from "./dataSlice";

export const getAllBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=21&page=0&size=999"
      );
      const data = await res.json();

      dispatch(getBooks(data));
      dispatch(dataLoaded(true));
    };
    fetchData();
  };
};

export const getAllBooksByCategoryId = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}&page=0&size=10s`
      );
      const data = await res.json();

      dispatch(getBooksByCategories(data));
    };
    fetchData();
  };
};

export const getHappinessMindfulBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&page=0&size=10s`
      );
      const data = await res.json();

      dispatch(HappinessAndMindfulBooks(data));
    };

    fetchData();
  };
};
export const getCareerBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=11&page=0&size=10`
      );
      const data = await res.json();

      dispatch(CareerBooks(data));
    };

    fetchData();
  };
};
export const getProductivityBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=12&page=0&size=10s`
      );
      const data = await res.json();

      dispatch(ProductivityBooks(data));
    };

    fetchData();
  };
};
export const getSocietyBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=19&page=0&size=10s`
      );
      const data = await res.json();

      dispatch(SocietyBooks(data));
    };

    fetchData();
  };
};
export const getInvestmentBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&page=0&size=10s`
      );
      const data = await res.json();

      dispatch(InvestmentBooks(data));
    };

    fetchData();
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories"
      );
      const data = await res.json();

      dispatch(getCategories(data));
    };

    fetchData();
  };
};
