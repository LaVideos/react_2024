import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/urls";
import {ICarPaginate} from "../types";

const apiCars = {
    getCars:async ():Promise<ICarPaginate> => {
    const response = await axiosInstance.get<ICarPaginate>(`/${ENDPOINTS.CARS}`);
    console.log(response)
    return response.data;
    }
};

export {
    apiCars
}
