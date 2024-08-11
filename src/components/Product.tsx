import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {

    const [desc, setDesc] = useState<boolean>(false);

    return (
        <div className="flex py-3 px-3 flex-col items-center border-slate-200 border-2 w-1/4 rounded-md my-5">
            <img src={product.image} alt="" className="w-32" />
            <p className="text-2xl">{product.title}</p>
            <p className="font-bold text-xl">{product.price}$</p>
            {desc && <p className="text-xl">{product.description}</p>}
            <button className="bg-blue-500 py-4 px-6 font-bold text-xl text-slate-50 hover:bg-blue-700 my-3" onClick={() => setDesc(!desc)}>Show details</button>
        </div>
    )
}

export default Product;