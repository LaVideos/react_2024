import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/urls";

export const services = {
    getAllUsers:()=>axiosInstance.get(`/${ENDPOINTS.USERS}`),
    getAllTodos:()=>axiosInstance.get(`/${ENDPOINTS.TODOS}`),
    getAllCarts:()=>axiosInstance.get(`/${ENDPOINTS.CARTS}`),
    getAllQuotes:()=>axiosInstance.get(`/${ENDPOINTS.QUOTES}`),
    getAllProducts:()=>axiosInstance.get(`/${ENDPOINTS.PRODUCTS}`),
    getUserById:(id:number|string)=>axiosInstance.get(`/${ENDPOINTS.USERS}/${id}`),
    getCartById:(id:number|string)=>axiosInstance.get(`/${ENDPOINTS.CARTS}/${id}`),
    getProductById:(id:number|string)=>axiosInstance.get(`/${ENDPOINTS.PRODUCTS}/${id}`),
    getQuuteById:(id:number|string)=>axiosInstance.get(`/${ENDPOINTS.QUOTES}/${id}`),
    getCartsByUserId:(id:number|string)=>axiosInstance.get(`/${ENDPOINTS.CARTS}/${ENDPOINTS.USER}/${id}`),

}
