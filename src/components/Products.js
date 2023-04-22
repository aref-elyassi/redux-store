import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from '../redux/product/productAction'
import Loader from './Loader'
import ProductCard from './ProductCard'
const Products = () => {
    const productState = useSelector(state => state.productsState)
    console.log(productState);
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    useEffect(() => {
        dispatch(fetchProductsRequest())
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                const products = response.data
                dispatch(fetchProductsSuccess(products))
                setData(response.data)
                setFilter(response.data)

            })
            .catch((error) => {
                const errMsg = error.message
                dispatch(fetchProductsFailure(errMsg))
            })
    }, [])
    const filterItems = (cat) => {

        const updatedLiast = data.filter((x) => x.category === cat)
        setFilter(updatedLiast)


    }

    return (
        <>

            <div className='container-fluid mt-5'>
                <div className='row d-flex alig-items-center gap-2 justify-content-center'>
                    <button className='btn btn-outline-primary ' style={{ width: '10rem' }} onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-primary ' style={{ width: '10rem' }} onClick={() => filterItems("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-primary' style={{ width: '10rem' }} onClick={() => filterItems("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-primary' style={{ width: '10rem' }} onClick={() => filterItems("jewelery")}>Jwelery</button>
                    <button className='btn btn-outline-primary' style={{ width: '10rem' }} onClick={() => filterItems("electronics")}>Electronics</button>
                </div>


                <h1 className='text-center mt-5'>All Items</h1>

                <div className='row gap-2 mt-5 d-flex align-items-center justify-content-center'>

                    {productState.loading && <Loader />}
                    {productState.products && filter.map((product) => <ProductCard key={product.id} {...product} />)}
                </div>
            </div>
        </>
    )
}

export default Products
