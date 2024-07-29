import React, {FC, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {ICarPaginate} from "../../models";


interface PaginationProps{
    data:ICarPaginate
}



const PaginationComponent:FC<PaginationProps> = ({data}) => {

    const [page, setPage] = useState<string>("0")

    let [searchParams, setSearchParams] = useSearchParams({page: '0'});

    return (
        <div>

            <button disabled={!data.prev} onClick={() => {

                let page = +(searchParams.get('page') || '1');
                let nextPage = (page - 1).toString();
                if(page>1)setSearchParams({page: nextPage});
                else setSearchParams({page:'1'})
            }}>prev
            </button>



            <button disabled={!data.next} onClick={() => {

                let page = +(searchParams.get('page') || '1');
                let nextPage = (page + 1).toString();
                setSearchParams({page: nextPage});
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;
