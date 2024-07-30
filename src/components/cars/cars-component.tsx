import React, {FC} from 'react';
import {ICarPaginate} from "../../types";
import {CarComponent} from "../index";

interface CarsProps {
    cars:ICarPaginate
}


const CarsComponent:FC<CarsProps> = ({cars}) => {
    return (
        <div>
            {
                // cars.items.map(car=><CarComponent key={car.id} car={car}/>)

                JSON.stringify(cars)

            }
        </div>
    );
};

export default CarsComponent;
