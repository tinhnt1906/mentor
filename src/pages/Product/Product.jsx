import { Col, Row } from 'antd'
import ProductCard from '../../components/domain/ProductCard'
import { useProduct } from './Product.hook.js'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

function Product() {
  const { products } = useProduct()
  return (
    <Row gutter={[16, 16]}>
      {products?.map((item) => (
        <Col key={item.id} lg={4} sm={12} md={8} xs={12}>
          <Link to={`/product-detail/${item.id}`}>
            <ProductCard name={item.name} image={item.image} price={item.price} />
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default Product
