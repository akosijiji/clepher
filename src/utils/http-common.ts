import axios from "axios";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  headers: {
    "Content-type": "application/json"
  }
});