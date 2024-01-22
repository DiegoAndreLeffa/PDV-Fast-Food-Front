import axios from "axios";

export const api = axios.create({
  baseURL: "https://fast-food-wc9y.onrender.com",
  timeout: 9000,
});
