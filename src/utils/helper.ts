import { Product } from "../types/types";

export const mergeProductsArrayAndRemoveDuplicates = (existingProductArray: Array<Product>,newProductArray: Array<Product>) : Array<Product> => {
    const uniqueID = new Set<number>()
    existingProductArray.map(product => {
        uniqueID.add(product.id)
    })
    const mergedArray = [...existingProductArray,...newProductArray.filter(product => !uniqueID.has(product.id))]
    return mergedArray
}