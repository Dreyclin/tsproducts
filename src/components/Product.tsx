import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {

    const [desc, setDesc] = useState<boolean>(false);
    
    const btnClasses = "py-4 px-6 font-bold text-xl my-3 "

    return (
        <div className="flex py-3 px-3 flex-col items-center border-slate-200 border-2 w-1/4 rounded-md my-2">
            <img src={product.image} alt="" className="w-32" />
            <p className="text-2xl">{product.title}</p>
            <p className="font-bold text-xl">{product.price}$</p>
            {desc && <p className="text-xl">{product.description}</p>}
            <button 
            className={!desc ? 
                btnClasses + "bg-blue-500  text-slate-50 hover:bg-blue-700" : 
                btnClasses + "bg-yellow-500 text-black hover:bg-yellow-700"} 
            onClick={() => setDesc(!desc)}>{!desc ? "Show details" : "Hide details"}</button>
        </div>
    )
}

export default Product;