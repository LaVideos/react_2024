import {ICar} from "./ICar";
import {IPagePaginate} from "./IPagePaginate";

export interface ICarPaginate{
    total_items: number,
    total_pages: number,
    prev: IPagePaginate|null,
    next: IPagePaginate|null,
    items: ICar[];
}
