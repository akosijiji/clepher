import http from "../utils/http-common";
import NewsData from "../types/NewsData";
import { API_KEY, SEARCH_FUNCTION, SEARCH_TICKERS } from "../utils/constants";

const getAll = () => {
  return http.get<Array<NewsData>>("/query?function=" + SEARCH_FUNCTION + "&tickers=" + SEARCH_TICKERS + "&apikey=" + API_KEY);
};

const NewsDatService = {
    getAll,
  };
  
  export default NewsDatService;