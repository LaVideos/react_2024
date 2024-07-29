import {ICarPaginate} from "../models";
import {axiosInstance} from "./axios";
import {ENDPOINTS} from "../constants/urls";

const carsService = {
    getAllCars:async ():Promise<ICarPaginate>=>{
        const response = await axiosInstance.get<ICarPaginate>(`/${ENDPOINTS.CARS}`);
        console.log(response.data)
        return response.data;
    }
}




export {carsService}
