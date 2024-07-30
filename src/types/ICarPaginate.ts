import {ICar} from "./ICar";

export interface ICarPaginate{
    total_items: number,
    total_pages: number,
    prev: string|null,
    next: string|null,
    items: ICar[];
}
