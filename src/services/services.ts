import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/url";

const services = {
    getAllUsers:()=>axiosInstance.get(ENDPOINTS.USERS),
    getAllPosts:()=>axiosInstance.get(ENDPOINTS.POSTS),
    getAllComments:()=>axiosInstance.get(ENDPOINTS.COMMENTS),
}


export {services}
