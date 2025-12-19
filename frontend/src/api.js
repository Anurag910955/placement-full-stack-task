import axios from "axios";

const API = axios.create({
  baseURL: "https://placement-full-stack-task.onrender.com/api",
});

export default API;
