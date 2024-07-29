import React, {useEffect, useState} from 'react';
import {ICarPaginate} from "../models";
import {Axios, AxiosError} from "axios";
import {carsService} from "../services";
import {CarsComponent, PaginationComponent} from "../components";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarPaginate>({
        items:[],
        next:null,
        prev:null,
        total_pages:0,
        total_items:0
    })


    useEffect(() => {
       const getCarsData = async ()=>{
           try {

               let response = await carsService.getAllCars();
               setCars(response)

           }catch (e){
               const axiosError = e as AxiosError;
               if(axiosError&&axiosError?.response?.status === 401){
                   console.log(axiosError)
               }
           }
       };

       getCarsData();
       console.log(cars)
    }, []);

    return (
        <div>
            <CarsComponent cars={cars.items}/>
            <PaginationComponent data={cars}/>
        </div>
    );
};

export default CarsPage;
