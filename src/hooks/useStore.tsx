import {create} from "zustand";

export interface Store{
    count:number;
    inc:()=>void;
    dec:()=>void;
}

export const useStore =  create<Store>((set)=>({
    count:0,
    inc:()=>set((state)=>({
        count:state.count+1
    })),
    dec:()=>set((state)=>({
        count:state.count-1
    }))
}))
