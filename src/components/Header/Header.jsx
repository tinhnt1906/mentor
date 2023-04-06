import { Layout, Menu, Col, Row, Button } from 'antd'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const Header = () => {
  const { Header } = Layout

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={3}>Logo</Col>

          <Col span={18}>
            <Menu mode='horizontal'>
              <Menu.Item>SALEOFF 30%</Menu.Item>
              <Menu.Item>GIÀY BÓNG ĐÁ</Menu.Item>
              <Menu.Item>GIÀY BÓNG RỔ</Menu.Item>
              <Menu.Item>GIÀY ĐI BỘ</Menu.Item>
              <Menu.Item>GIÀY SNEAKER</Menu.Item>
            </Menu>
          </Col>

          <Col span={3}>
            <Link>
              <Button icon={<SearchOutlined />}></Button>
            </Link>
            <Link to='/cart'>
              <Button icon={<ShoppingCartOutlined />}></Button>
            </Link>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
