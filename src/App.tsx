import React from 'react';
import "./index.css"
import Product from './components/Product';
import { products } from './data/products';


function App() {
  return (
    <div className="flex items-center flex-col gap-5">
      {products.map((product) => {
        return <Product product={product}/>
      })}
    </div>
  );
}

export default App;
