import {Layout, Menu, Col, Row, Button, Space} from 'antd'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { routes } from '../../routes/index.jsx'
import useHeader from './useHeader.jsx'

const Header = () => {
  const { Header } = Layout

  const items = useHeader()

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={3}>Logo</Col>
          <Col span={18}>
            <Menu mode='horizontal'  theme="dark"
                  defaultSelectedKeys={['2']}
                  items={items}
            />
          </Col>
          <Col span={3}>
          <Space>
            <Link>
              <Button icon={<SearchOutlined />}></Button>
            </Link>
            <Link to={routes.CART.path}>
              <Button icon={<ShoppingCartOutlined />}></Button>
            </Link>
          </Space>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
