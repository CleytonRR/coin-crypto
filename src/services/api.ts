import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinstats.app/public/v1/coins?skip=0&limit=10",
});

export default api;
