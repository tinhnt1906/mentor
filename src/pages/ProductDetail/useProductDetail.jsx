import { useParams } from 'react-router-dom'
import products from '../../Mock/Product'

function useProductDetail() {
  const { slug } = useParams()
  const product = Object.values(products).find((item) => item.href == slug)
  return product
}

export default useProductDetail
