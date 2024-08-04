import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/endpoints";
import {IUser} from "../types/IUser";
import {IPost} from "../types/IPost";
import {ITodo} from "../types/ITodo";
import {IComment} from "../types/IComment";

export const JSONServices = {
    getUsers:async ()=>await axiosInstance.get<IUser[]>(`/${ENDPOINTS.USERS}`),
    getPosts:async ()=>await axiosInstance.get<IPost[]>(`/${ENDPOINTS.POSTS}`),
    getTodos:async ()=>await axiosInstance.get<ITodo[]>(`/${ENDPOINTS.TODOS}`),
    getComments:async ()=>await axiosInstance.get<IComment[]>(`/${ENDPOINTS.COMMENTS}`),
}
