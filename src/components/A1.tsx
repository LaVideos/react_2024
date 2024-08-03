import React from 'react';
import {Store, useStore} from "../hooks/useStore";

const A1 = () => {

    const {dec,inc} = useStore();

    return (
        <div>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default A1;
