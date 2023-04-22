
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from '../redux/product/productAction';

import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Loader from './Loader';
const ProductsDetails = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.productDetailsState)
  //const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchProductRequest())
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const product = response.data
        dispatch(fetchProductSuccess(product))
      })
      .catch((error) => {
        const errMsg = error.message
        dispatch(fetchProductFailure(errMsg))
      })
  }, [])

  return (
    <div className='container border p-4 mt-5 rounded'>
      <div className='row d-flex'>
        {state.loading ? <Loader /> :
          <>
            <div className='col-md-4'>
              <img src={state.product.image} alt={state.product.title} style={{ width: '300px', height: '400px' }} />
            </div>
            <div className='col-md-7'>
              <h3 className='text-primary'>Title:</h3>
              <h3>{state.product.title}</h3>
              <hr />
              <h2 className='text-primary'>Description:</h2>
              <p>{state.product.description}</p>
              <hr />
              <h2 className='text-primary'>Category:</h2>
              <h3>{state.product.category}</h3>
              <hr />
              <h4 className='text-primary'>Price:</h4>
              <h5>{state.product.price} $</h5>
            </div>
          </>}

      </div>
    </div>
  )
}

export default ProductsDetails
