import {axiosInstance} from "./axios";
import {ITokenObtainPair, ITokenRefresh, IUser, IUserResponse} from "../models";
import {ENDPOINTS} from "../constants/urls";

const authService = {
    authenticate: async (data: ITokenObtainPair): Promise<void> => {
        let response = await axiosInstance.post<ITokenRefresh>(`/${ENDPOINTS.AUTH}`, data);
        console.log(response)
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}



export {
    authService
}
