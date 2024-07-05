import {useState} from "react";

export const useToggle=<T> (intialState:boolean)=>{


    const [toggle, setToggle] = useState<boolean>(intialState)

    const handleToggle = ()=>setToggle(prevState => !prevState);


    return{toggle,handleToggle}

}
