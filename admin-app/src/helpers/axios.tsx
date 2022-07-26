import axios from "axios";
import { api } from "../urlconfig";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",

    //     'Authorization'
  },
});

export default axiosInstance;
