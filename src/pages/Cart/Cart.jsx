import { Typography, Button, Col, InputNumber, Row, Table, Image, Empty } from 'antd'
import Price from '../../components/ui/Price'
import { useSelector } from 'react-redux'
import { changeQuantity, removeCart } from '../../features/cartSlice'
import { DeleteOutlined } from '@ant-design/icons'
import { columns } from './Cart.hook'

function Cart() {
  const { Title } = Typography

  const carts = useSelector((state) => state.cart.cartItems)

  const datas = Object.values(carts).map((item) => {
    return {
      key: item.id,
      image: <Image src={item.image} style={{ width: '5rem', height: '5rem' }} />,
      name: item.name,
      price: item.price,
      quantity: (
        <InputNumber min={1} value={item.quantity} onChange={(value) => handleChangeQuantity(item.id, value)} />
      ),
      total: item.price * item.quantity,
      delete: (
        <Button>
          <DeleteOutlined onClick={() => handleDeleteItemCart(item)} />
        </Button>
      )
    }
  })

  const handleDeleteItemCart = (item) => {
    dispatch(removeCart(item))
  }

  const handleChangeQuantity = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity }))
  }

  const totalPrice = Object.values(carts).reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity
  }, 0)
  return (
    <div className='cart'>
      <div className='cart-body'>
        <Title level={3}>Giỏ hàng</Title>
        {Object.values(carts).length > 0 ? (
          <Row>
            <Col span={18}>
              <Table columns={columns} dataSource={datas} />
            </Col>
            <Col span={6}>
              <Title level={3}>Tổng đơn hàng</Title>
              <Price price={totalPrice} />
            </Col>
          </Row>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  )
}

export default Cart
