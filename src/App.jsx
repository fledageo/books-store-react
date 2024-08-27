import "./index.css"
import { useState, useReducer } from 'react'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import bookContext from "./context"
import { productsReducer, basketItems, products} from "./reducer"


function App() {
  const [state, dispatch] = useReducer(productsReducer, basketItems);
  const handleDispatch = ({ type, payload }) => {
    dispatch({
      type,
      payload
    })
  }

  return (
    <>
      <bookContext.Provider value={{ products, state, handleDispatch }}>
        <div className='main-container'>
          <ProductList />
          <Basket />
        </div>
      </bookContext.Provider>
    </>
  )
}

export default App
