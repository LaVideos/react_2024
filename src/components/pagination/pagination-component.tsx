import React, {FC} from 'react';
import {ICarPaginate} from "../../types";
import {useSearchParams} from "react-router-dom";
import {IPagePaginate} from "../../types/IPagePaginate";


interface PaginationProps{
   prev:null|IPagePaginate,
    next:null|IPagePaginate
}

const PaginationComponent:FC<PaginationProps> = ({prev,next}) => {

    const [querry,setQuerry] = useSearchParams({page:"1"});

    const changePage = (nextOrPrev:string) =>{
        switch (nextOrPrev){
            case "prev":setQuerry({...prev})
                break;
            case "next":setQuerry({...next})
                break;
        }

    }

    return (
        <div>

            <button
                onClick={() => {
                    changePage('prev')
                }}
            disabled={!prev}>
                prev
            </button>
            <button
                onClick={() => {
                    changePage('next')
                }}
            disabled={!next}>

                next
            </button>
        </div>
    );
};

export default PaginationComponent;
