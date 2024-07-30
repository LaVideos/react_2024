import {axiosInstance} from "./axios";
import {ENDPOINTS, LOCAL_STORAGE_TOKEN} from "../constants/urls";
import {ITokenObtainPair, ITokenRefresh} from "../types";

const apiAuth = {

    authenticate:async (data:ITokenObtainPair)=>{
        const response = await axiosInstance.post<ITokenRefresh>(`/${ENDPOINTS.AUTH}`,data);
        localStorage.setItem(LOCAL_STORAGE_TOKEN,JSON.stringify(response.data))
        console.log(response.data)
    }

}

export {apiAuth}
