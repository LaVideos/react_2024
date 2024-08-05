import axios from "axios";
import {baseUrl} from "../constants/endpoints";

const axiosInstance = axios.create({baseURL:baseUrl});


export {axiosInstance}
