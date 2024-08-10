import React from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({product}) => {
    return(
        <div className="flex py-3 px-3 flex-col items-center border-slate-200 border-2 w-2/4 rounded-md my-5">
            <img src={product.image} alt="" className="w-64"/>
            <p className="text-2xl">{product.title}</p>
            <p className="text-xl">{product.description}</p>
        </div>
    )
}

export default Product;