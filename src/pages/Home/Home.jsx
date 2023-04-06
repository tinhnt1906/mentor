import Layout from 'antd/es/layout/layout'
import React from 'react'
import Banner from '../Banner'
import ProductList from '../ProductList'

function Home() {
  return (
    <Layout>
      <Banner />
      <ProductList />
    </Layout>
  )
}

export default Home
