import { Card } from 'antd'

function ProductCard() {
  const { Meta } = Card

  return (
    <Card hoverable cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}>
      <Meta title='Europe Street beat' />
      <span>$1000</span>
    </Card>
  )
}

export default ProductCard
