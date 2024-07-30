import axios from "axios";
import {base_Url, ENDPOINTS, LOCAL_STORAGE_TOKEN} from "../constants/urls";
import {retriveLocalStorage} from "../utils";
import {ITokenRefresh} from "../types";

const axiosInstance = axios.create({baseURL:base_Url});


axiosInstance.interceptors.request.use(requestObject=>{

    if(localStorage.getItem(LOCAL_STORAGE_TOKEN) && requestObject.url !== `/${ENDPOINTS.AUTH}`){
        requestObject.headers.set('Authorization','Bearer ', retriveLocalStorage<ITokenRefresh>(LOCAL_STORAGE_TOKEN).access);
    }

    return requestObject
});



export {axiosInstance}

