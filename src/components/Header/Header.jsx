import { Layout, Menu, Col, Row, Button } from 'antd'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { routes } from '../../routes'
import useHeader from './useHeader'

const Header = () => {
  const { Header } = Layout

  const items = useHeader()

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={3}>Logo</Col>

          <Col span={18}>
            <Menu mode='horizontal' items={items} />
          </Col>

          <Col span={3}>
            <Link>
              <Button icon={<SearchOutlined />}></Button>
            </Link>
            <Link to={routes.CART.path}>
              <Button icon={<ShoppingCartOutlined />}></Button>
            </Link>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
