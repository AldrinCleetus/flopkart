import { CategoryType } from "../utils/contants";

export type UsersState = {
    APIResponse: DummyJSONResponse;
    status: "idle" | "pending" | "succeeded" | "failed";
}
  
export type Product = {
    id: number;
    title: string;
    description: string;
    brand: string;
    category: string;
    discountPercentage: number;
    images: Array<string>;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

export type DummyJSONResponse = {
    products: Array<Product>;
    limit: number;
    skip: number;
    total: number;
}

export type ProductsFromAPIParams = {
    searchValue?: string
    skip?: number
    findByCategory?: boolean
    category?: CategoryType | ""
}

export type CartItemsType = {
    cartItems: Array<{
        product: Product,
        quantity: number
    }>
}

export type ProductCartProps = {
    product: Product
}

export type ProductsShelfProps = {
    skipProducts? :number
    category? :CategoryType | ''
    showByCategory?: boolean
}

export type CartProductProps = {
    product: Product
    productAmount: number
}

export type ModalProps ={
    showModal : boolean
    confirmationFunction: ()=> void
}

export type ModalState = {
    showModal : boolean,
    

}
