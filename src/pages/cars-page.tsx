import React, {useEffect, useState} from 'react';
import {CarsComponent} from "../components";
import {ICarPaginate} from "../types";
import {apiCars} from "../services";
import {AxiosError} from "axios";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarPaginate>({
        items:[],
        next:null,
        prev:null,
        total_pages:0,
        total_items:0,
    })



    useEffect(() => {

        const getCarsData = async () => {
            try {
            let response = await apiCars.getCars();
            setCars(response)
        }catch (e){
            const axiosError = e as AxiosError
            console.log(axiosError)

        }

    }

        getCarsData();

    }, []);



    return (
        <>
         <CarsComponent cars={cars} />
        </>
    );
};

export default CarsPage;
