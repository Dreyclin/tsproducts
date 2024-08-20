import "./index.css"
import Product from './components/Product';
import { useProducts } from "./hooks/useProducts";


function App() {

  const {products, loader, error} = useProducts();

  return (
    <div className="flex items-center flex-col">
      {error && <p className='text-red-500 text-4xl'>{error.message}</p>}
      {(loader && !error) && <p className="text-2xl font-bold p-7">Loading...</p>}
      {products && products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  );
}

export default App;
