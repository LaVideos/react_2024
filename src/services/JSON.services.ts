import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/endpoints";
import {IPost} from "../types/IPost";
import {IUser} from "../types/IUser";
import {ITodo} from "../types/ITodo";
import {IComment} from "../types/IComment";

export const JSONServices = {
    getPosts:async ()=>await axiosInstance.get<IPost[]>(`/${ENDPOINTS.POSTS}`),
    getUsers:async ()=>await axiosInstance.get<IUser[]>(`/${ENDPOINTS.USERS}`),
    getTodos:async ()=>await axiosInstance.get<ITodo[]>(`/${ENDPOINTS.TODOS}`),
    getComments:async ()=>await axiosInstance.get<IComment[]>(`/${ENDPOINTS.COMMENTS}`)
}
