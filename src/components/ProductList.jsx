import React, { useContext } from 'react'
import context from '../context'
import ProductItem from './ProductItem'
import "./style/style.css"

export default function ProductList() {
  const {products} = useContext(context)
  return (
    <div className='productList-container'>
        <div className='productList-wrapper'>
            {
              products.map(elm => <ProductItem key={elm.id} {...elm}/>)
            }
        </div>
    </div>
  )
}
