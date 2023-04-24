import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Col, Layout, Menu, Row, Space } from 'antd'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../routes'
import useHeader from './useHeader'

export const Header = () => {
  const { Header } = Layout
  const items = useHeader()

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  console.log(cart)
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
                <Badge count={Object.keys(cart.cartItems).length} showZero>
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
