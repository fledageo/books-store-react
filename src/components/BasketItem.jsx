import React, { useContext, useEffect } from 'react'
import bookContext from "../context"

import "./style/style.css"
export default function BasketItem({img,title,price,quantity,id}) {
  const {handleDispatch} = useContext(bookContext)
  const handleAddQuantity = (id) => {
    handleDispatch({
      type:"ADD_QUANTITY",
      payload:id,
    })
  } 
  const handleMinusQuantity = () => {
    handleDispatch({
      type:"MINUS_QUANTITY",
      payload:id,
    })
  }
  const handleDelete = (id) => {
    handleDispatch({
      type:"DELETE",
      payload:id,
    })
  }

  return (
    <tr>
        <td><img className="basket-img" src={img}/></td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
            <button className='basket-action-btn' onClick={() => handleAddQuantity(id)}>+</button>
            <button className='basket-action-btn' onClick={() => handleMinusQuantity(id)}>-</button>
            <button className='basket-action-btn' onClick={() => handleDelete(id)}>x</button>
        </td>
    </tr>
  )
}
