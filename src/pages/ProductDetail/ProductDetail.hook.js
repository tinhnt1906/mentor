import { useParams } from 'react-router-dom'
import { products } from '../../mock/Product'
import { useCallback, useEffect, useState } from 'react'

export function useProductDetail() {
  const [product, setProduct] = useState()
  const { id } = useParams()

  const load = useCallback(() => {
    try {
      const findProduct = Object.values(products).find((item) => item.id == id)
      if (!findProduct) {
        throw Error('product not found')
      }
      setProduct(findProduct)
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    load()
  }, [])

  return { product }
}
