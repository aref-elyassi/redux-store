import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CartBtn = () => {
  const state=useSelector(state=>state.cartState)
  return (
    <>
    <Link to='/cart' className='btn btn-primary mx-2'>
      <span className='fa fa-shopping-cart me-2'></span>Cart ({state.itemsCounter})
    </Link>
    </>
  )
}

export default CartBtn