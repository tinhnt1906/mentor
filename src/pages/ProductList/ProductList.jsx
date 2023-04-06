import React from 'react'
import Product from '../Product/Product'
import { Row } from 'antd'

function ProductList() {
  return (
    <Row gutter={16}>
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
  )
}

export default ProductList
