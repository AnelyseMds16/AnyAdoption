import axios from "axios";

const api = axios.create({
  baseURL: "https://any-adoption.herokuapp.com/api",
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api;