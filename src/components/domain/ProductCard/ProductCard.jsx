import { Card } from 'antd'
import Price from '../../ui/Price/index.js'

function ProductCard({ name, price, image }) {
  const { Meta } = Card

  return (
    <Card hoverable cover={<img alt={name} src={image} />}>
      <Meta title={name} />
      <Price price={price} />
    </Card>
  )
}

export default ProductCard
