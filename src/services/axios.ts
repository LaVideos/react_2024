import axios from "axios";
import {baseUrl} from "../constants/urls";
import {retriveLocalStorage} from "../utils";
import {ITokenRefresh} from "../models";

const axiosInstance = axios.create({baseURL:baseUrl});


axiosInstance.interceptors.request.use(requestObject => {

    if (localStorage.getItem('tokenPair') && requestObject.url !== '/auth') {
        requestObject.headers.set('Authorization', 'Bearer ' + retriveLocalStorage<ITokenRefresh>('tokenPair').access);

    }
    return requestObject;
})


export {
    axiosInstance
}
