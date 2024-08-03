import {axiosInstance} from "./axios";
import {ENDPOINTS, LOCAL_STORAGE_TOKEN} from "../constants/urls";
import {ITokenObtainPair, ITokenRefresh} from "../types";
import {retriveLocalStorage} from "../utils";

const apiAuth = {

    authenticate:async (data:ITokenObtainPair)=>{
        const response = await axiosInstance.post<ITokenRefresh>(`/${ENDPOINTS.AUTH}`,data);
        localStorage.setItem(LOCAL_STORAGE_TOKEN,JSON.stringify(response.data))
        },

    refresh:async ()=>{
        const refresh = retriveLocalStorage<ITokenRefresh>(LOCAL_STORAGE_TOKEN).refresh;
        const response =
            await axiosInstance.post<ITokenRefresh>
            (`/${ENDPOINTS.AUTH}/${ENDPOINTS.REFRESH}`,{refresh:refresh});
        localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(response.data));
    }

}

export {apiAuth}
