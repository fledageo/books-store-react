import React, { useContext } from 'react'
import bookContext from '../context'
export default function ProductItem({img,author,price,id}) {
  const {handleDispatch} = useContext(bookContext)
  const handleAdd = (id) => {
    handleDispatch({
      type:"ADD_TO_BASKET",
      payload:id,
    })
  }
  return (
    <div className='product-block'>
        <div className="productInfo-wrapper">
            <div className="productInfo-img">
                <div className='productInfo-img-add' onClick={() => handleAdd(id)}>Add</div>
                <img src={img} className='product-block-img'/>
            </div>
            <span>By {author}</span>
            <span>{price} USD</span>
        </div>
    </div>
  )
}
