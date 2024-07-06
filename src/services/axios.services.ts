import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/url/urls";

const USER_API = {
    getALLUsers:async () => await axiosInstance.get(ENDPOINTS.USERS),
    getUserPosts: async (id: number) => await axiosInstance.get(ENDPOINTS.USERS +"/"+id + ENDPOINTS.POSTS)
}

export {
    USER_API
}
