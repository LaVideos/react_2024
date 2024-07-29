import React, {FC} from 'react';
import {ICar} from "../../models";

interface CarsProps{
    cars:ICar[]
}

const CarsComponent:FC<CarsProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car,index)=><div key={index}>{car.brand} : {car.price}</div>)
            }

            </div>
    );
};

export default CarsComponent;
