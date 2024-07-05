import {useRef} from "react";

export const usePrevious=<T>(item:number)=>{

    const current = useRef<number>(item);
    const prev = useRef<number>();

    if(current.current !==item){
        prev.current = current.current
        current.current = item
    }


    return[current.current,prev.current]

}
