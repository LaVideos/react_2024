import React from 'react';
import {useStore} from "../hooks/useStore";

const B1 = () => {
    const {count} = useStore();
    return (
        <div>
            {count}
            </div>
    );
};

export default B1;
