import { Category } from "./category"

export type Product = {
    id:number,
    title:string,
    price:number,
    image:string,
    category:Category
}