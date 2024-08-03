import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/urls";
import {ICarPaginate} from "../types";

const apiCars = {
    getCars:async (page:string="1"):Promise<ICarPaginate> => {
    const response = await axiosInstance.get<ICarPaginate>(`/${ENDPOINTS.CARS}`,{params:{page:page}});
    return response.data;
    }
};

export {
    apiCars
}
