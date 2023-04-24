import { useParams } from 'react-router-dom'
import { products as mockProduct } from '../../mock/Product'
import { useCallback, useEffect, useState } from 'react'

function useProductDetail() {
  const [product, setProduct] = useState()

  const { slug } = useParams()
  const load = useCallback(() => {
    try {
      const findProduct = Object.values(mockProduct).find((item) => item.id === slug)
      if (!findProduct || !slug) {
        throw Error('not found product')
      }
      setProduct(findProduct)
    } catch (e) {
      throw e
    }
  }, [])

  useEffect(() => {
    load()
  }, [])

  return { product }
}

export default useProductDetail
