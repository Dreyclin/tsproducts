import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loader, setLoader] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError>();
  
    useEffect(() => {
      loadProducts();
    }, [])
  
    async function loadProducts() {
      try {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data);
        setLoader(false);
      } catch (error) {
        setError(error as AxiosError);
      }
    }

    return {products, loader, error}
}