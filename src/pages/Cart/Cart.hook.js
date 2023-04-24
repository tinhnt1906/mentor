import { useSelector } from 'react-redux'
import { changeQuantity, removeCart } from '../../features/cartSlice'

const carts = useSelector((state) => state.cart.cartItems)

const columns = [
  {
    title: 'Hình ảnh',
    dataIndex: 'image'
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name'
  },
  {
    title: 'Giá',
    dataIndex: 'price'
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity'
  },
  {
    title: 'Tổng cộng',
    dataIndex: 'total'
  },
  {
    title: 'Xoá',
    dataIndex: 'delete'
  }
]

const datas = Object.values(carts).map((item) => {
  return {
    key: item.id,
    image: <Image src={item.image} style={{ width: '5rem', height: '5rem' }} />,
    name: item.name,
    price: item.price,
    quantity: <InputNumber min={1} value={item.quantity} onChange={(value) => handleChangeQuantity(item.id, value)} />,
    total: item.price * item.quantity,
    delete: (
      <Button>
        <DeleteOutlined onClick={() => handleDeleteItemCart(item)} />
      </Button>
    )
  }
})

const totalPrice = Object.values(carts).reduce((previousValue, currentValue) => {
  return previousValue + currentValue.price * currentValue.quantity
}, 0)

export { datas, carts, totalPrice, columns }
