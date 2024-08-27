import React, { useContext, useEffect, useState } from 'react'
import bookContext from '../context'
import "./style/style.css"
import BasketItem from './BasketItem'

export default function Basket() {
  const {state} = useContext(bookContext)
  const [total,setTotal] = useState(0)
  useEffect(() => {
    const calcTotal = state.reduce((acc,elm) => acc + (elm.price * elm.quantity),0)
    setTotal(calcTotal)
  },[state])
  return (
    <div className='basket-container'>
        <div className="basketInfo-wrapper">
          <span className='basket-total'>Total: ${total.toFixed(2)}</span>
          <table>
            <thead>
                <tr>
                    <td>Book</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {                  
                  state.map(elm => <BasketItem key={elm.id} {...elm}/>)
                }
            </tbody>
          </table>
        </div>
    </div>
  )
}
