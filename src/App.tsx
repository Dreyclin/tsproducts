import React, { useEffect, useState } from 'react';
import "./index.css"
import Product from './components/Product';
import { IProduct } from './models';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState<IProduct[]>([])


  useEffect(() => {
    loadProducts();
  }, [])

  async function loadProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
    setProducts(response.data);
  }

  return (
    <div className="flex items-center flex-col gap-5">
      {products && products.map((product) => {
        return <Product product={product}/>
      })}
    </div>
  );
}

export default App;
