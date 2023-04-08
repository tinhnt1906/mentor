import { Col, Row } from 'antd'
import ProductCard from '../../components/ProductCard'
import useProduct from './useProduct'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

function Product() {
  const datas = useProduct()

  return (
    <Row gutter={[16, 16]}>
      {datas.map((item) => (
        <Col key={item.id} lg={4} sm={12} md={8} xs={12}>
          <Link to={item.href}>
            <ProductCard name={item.name} image={item.image} price={item.price} />
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default Product
