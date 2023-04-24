import { Row, Col, Image, Typography, Space, Button, InputNumber } from 'antd'
import Price from '../../components/ui/Price'
import { useProductDetail } from './ProductDetail.hook.js'
import { addToCart } from '../../features/cartSlice'
import { useDispatch } from 'react-redux'

function ProductDetail() {
  const { Title, Text } = Typography
  const dispatch = useDispatch()

  const { product } = useProductDetail()
  if (!product) return null

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div>
      <div className='product-detail'>
        <Row>
          <Col span={4}>Sub image</Col>

          <Col span={6}>
            <Image width={200} src={product.image} />
          </Col>

          <Col span={14}>
            <div className='product-info'>
              <Space direction='vertical'>
                <Title level={3}>{product.name}</Title>
                <Price price={product.price} />
                <Text>- Ship COD Thanh toán khi nhận hàng</Text>
                <Text>- Đổi hàng trong vòng 10 ngày. </Text>
                <Text>- Mua hàng trực tiếp tại: 242/14 Nguyễn Xí, Phường 13, Bình Thạnh</Text>
                <Text>- Liên hệ mua hàng: 0909.847.730 / 0981.997.698</Text>
              </Space>

              <Space>
                <Text>Số Lượng</Text>
                <InputNumber min={1} max={5} defaultValue={1} />
                <Button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</Button>
                <Button>Mua ngay</Button>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductDetail
