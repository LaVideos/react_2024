import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants";

const services = {
    getAllUsers:async ()=> await axiosInstance.get(`/${ENDPOINTS.USERS}`),
    getAllPosts:async ()=> await axiosInstance.get(`/${ENDPOINTS.POSTS}`),
    getAllComments:async ()=> await axiosInstance.get(`/${ENDPOINTS.COMMENTS}`),
    getAllTodos:async ()=> await axiosInstance.get(`/${ENDPOINTS.TODOS}`),
    getPostsByUserId:async (userId:number|string)=> await axiosInstance.get(`/${ENDPOINTS.POSTS}?userId=${userId}`),
    getCommentsByPostId:async (postId:number|string)=> await axiosInstance.get(`/${ENDPOINTS.COMMENTS}?postId=${postId}`),
};

export {services}
