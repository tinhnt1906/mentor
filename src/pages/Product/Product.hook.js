import {useCallback, useEffect, useState} from "react";
import {products as mockProduct} from '../../Mock/Product'
export function useProduct() {
  const [products,setProducts] =  useState()

  const load = useCallback(()=>{
    try {
      const res = Object.values(mockProduct)
      setProducts(res)
    }catch (e) {
      //noop
    }
  },[])

  useEffect(()=>{
    load()
  },[])

  return { products }
}
