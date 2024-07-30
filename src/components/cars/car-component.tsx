import React, {FC} from 'react';
import {ICar} from "../../types";

interface CarProps{
    car:ICar
}

const CarComponent:FC<CarProps> = ({car}) => {
    return (
        <div> {car.brand},{car.year} : {car.price}  </div>
    );
};

export default CarComponent;
