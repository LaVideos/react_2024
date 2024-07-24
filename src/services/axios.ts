import axios from "axios";
import {BaseUrl} from "../constants/urls";

const axiosInstance = axios.create({baseURL:BaseUrl,headers:{
        'Content-Type': 'application/json'
    }})


export {
    axiosInstance
}

