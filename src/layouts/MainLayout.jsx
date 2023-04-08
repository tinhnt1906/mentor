import { Layout } from 'antd'
import React from 'react'
import Header from './Header/index.js'
import Footer from "./Footer/index.js";

function MainLayout({ children }) {
  const { Content } = Layout

  return (
    <Layout>
      <Header  />
      <Content>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
