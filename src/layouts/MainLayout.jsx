import { Layout } from 'antd'
import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

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
