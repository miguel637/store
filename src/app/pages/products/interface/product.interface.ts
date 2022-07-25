//Una interface declar una srie de métodos y propiedades que deben ser implementador por una o más clases, las interfaces vienen a suplir la imposibilidad de herencia múltiple
export interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
    categoryId:number;
    stock:number;
}
