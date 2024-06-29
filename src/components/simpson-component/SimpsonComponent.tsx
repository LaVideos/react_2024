import React, {FC} from 'react';
import {ISimpsons} from "../../interface/simpsons-interfaces";

interface IProps{
    character:ISimpsons
}

const SimpsonComponent:FC<IProps> = (props) => {
    const {name,age,occupation,imageUrl} = props.character;
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{occupation}</div>
            <img alt={"no photo"} src={imageUrl}/>

            </div>
    );
};

export default SimpsonComponent;
