import {useRef} from "react";

export const usePrevious =<T> (value:number)=>{

    const current = useRef<number>(value);
    const prev = useRef<number>();

    if(current.current !== value){
        prev.current = current.current;
        current.current = value;

    }


    return[current.current,prev.current]

}
