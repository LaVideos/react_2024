import {useState} from "react";

export const useToggle=<T>(initalState:boolean)=>{

    const [toggle, setToggle] = useState<boolean>(initalState)
    const handleToggle = ()=>setToggle(prevState => !prevState);

    return{handleToggle,toggle}

}
