import axios from "axios";
import {BASE_URL} from "../constants/urls";


let axiosInstance = axios.create({baseURL:BASE_URL,headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }});


export {axiosInstance}
