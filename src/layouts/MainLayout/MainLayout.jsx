import { Layout } from 'antd'
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function MainLayout({ children }) {
  const { Content } = Layout

  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
