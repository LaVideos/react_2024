import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/url/urls";

const USER_API = {
    getAllUsers:async ()=> await axiosInstance.get(ENDPOINTS.USERS),
    getUser:(id:number)=>axiosInstance.get(ENDPOINTS.USERS+"/"+id),
    getAllUsersPost:(id:number)=>axiosInstance.get(ENDPOINTS.USERS+"/"+id+ENDPOINTS.POSTS)
}

export {USER_API}
