import { useCallback, useEffect, useState } from 'react'
import { products as mockProducts } from '../../mock/Product'

export function useProduct() {
  const [products, setProducts] = useState()

  const load = useCallback(() => {
    try {
      const res = Object.values(mockProducts)
      setProducts(res)
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    load()
  }, [])

  return { products }
}
