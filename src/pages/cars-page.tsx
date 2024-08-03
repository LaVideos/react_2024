import React, {useEffect, useState} from 'react';
import {CarsComponent} from "../components";
import {ICarPaginate} from "../types";
import {apiAuth, apiCars} from "../services";
import {AxiosError} from "axios";
import PaginationComponent from "../components/pagination/pagination-component";
import {useNavigate, useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarPaginate>({
        items:[],
        next:null,
        prev:null,
        total_pages:0,
        total_items:0,
    })

    const [query] = useSearchParams();

    const navigate = useNavigate();



    useEffect(() => {

        const getCarsData = async () => {
            try {
            let response = await apiCars.getCars(query.get('page')||"1");
            setCars(response)
        }catch (e){
            const axiosError = e as AxiosError

                if(axiosError&&axiosError?.response?.status === 401){
                   try {
                       console.log("refresh")
                       await apiAuth.refresh()
                   }catch (e){
                     navigate('/');
                   }
                }

        }

    }

        getCarsData();

    }, [query]);



    return (
        <>
         <CarsComponent cars={cars} />
            <PaginationComponent next={cars.next} prev={cars.prev}/>
        </>
    );
};

export default CarsPage;
