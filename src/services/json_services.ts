import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/urls";

export const services = {
    getAllUsers:()=>axiosInstance.get(ENDPOINTS.USERS),
    getAllPosts:()=>axiosInstance.get(ENDPOINTS.POSTS),
    getAllComments:()=>axiosInstance.get(ENDPOINTS.COMMENTS),
    getAllTodos:()=>axiosInstance.get(ENDPOINTS.TODOS),
    getPostsByUserId:(userId:string|number)=>axiosInstance.get(ENDPOINTS.POSTS+"?userId/"+userId),
    getCommentsByPostId:(postId:string|number)=>axiosInstance.get(ENDPOINTS.COMMENTS+"?postId/"+postId),
}
