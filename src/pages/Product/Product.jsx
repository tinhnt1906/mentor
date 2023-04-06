import { Col } from 'antd'
import ProductCard from '../../components/ProductCard'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <Col span={6}>
      <Link to='product-detail'>
        <ProductCard />
      </Link>
    </Col>
  )
}

export default Product
