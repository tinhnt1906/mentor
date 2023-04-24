import { Layout, Menu, Col, Row, Button, Space, Badge } from 'antd'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { routes } from '../../routes'
import useHeader from './useHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCountCart } from '../../features/cartSlice'

const Header = () => {
  const { Header } = Layout
  const items = useHeader()

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)

  useEffect(() => {}, [cart])
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={3}>Logo</Col>

          <Col span={18}>
            <Menu mode='horizontal' items={items} theme='dark' />
          </Col>

          <Col span={3}>
            <Space>
              <Link>
                <Button icon={<SearchOutlined />}></Button>
              </Link>
              <Link to={routes.CART.path}>
                <Badge count={cartTotalQuantity} showZero>
                  <Button icon={<ShoppingCartOutlined />}></Button>
                </Badge>
              </Link>
            </Space>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
