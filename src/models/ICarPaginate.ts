import {ICar} from "./ICar";

export interface ICarPaginate{
    total_items: number;
    total_pages: number;
    prev:  null;
    next:  null;
    items: ICar[];
}
