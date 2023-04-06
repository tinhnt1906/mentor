import { Layout } from 'antd'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
