import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constansts/url";

export const SERVICES = {
    postPosts: (title: string, body: string, userId: string | number) =>
        axiosInstance.post(ENDPOINTS.POSTS, { title, body, userId })
}

