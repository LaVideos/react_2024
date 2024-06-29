import React from 'react';
import {simpsonsCharacters} from "../../constants/simpsons-array";
import SimpsonComponent from "../simpson-component/SimpsonComponent";

const SimpsonsComponent = () => {



    return (
        <div>
            {simpsonsCharacters.map((character,index)=><SimpsonComponent character={character} key={index} />)}
        </div>
    );
};

export default SimpsonsComponent;
