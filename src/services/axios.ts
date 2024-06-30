import axios from "axios";
import {BASE_URL} from "../constants/url/urls";

let axiosInstance = axios.create({baseURL:BASE_URL})

axiosInstance.interceptors.request.use(request=>{
    return request
})

export {axiosInstance}
