import { Card } from 'antd'
import Price from '../../ui/Price'

export function ProductCard({ name, price, image }) {
  const { Meta } = Card

  return (
    <Card hoverable cover={<img alt={name} src={image} />}>
      <Meta title={name} />
      <Price price={price} />
    </Card>
  )
}
