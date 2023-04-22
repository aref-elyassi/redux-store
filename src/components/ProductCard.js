import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { shorten, isInCart, quantityCount } from '../helper/functions'
import trashIcon from '../assets/icons/trash.svg'
import { addItem, decrease, increase, removeItem } from '../redux/cart/cartAction';
const ProductCard = (props) => {
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className="card col-md-3 d-flex align-items-center justify-content-between">
            <img src={props.image} className="card-img-top mt-2" alt={props.title} style={{ width: '150px', height: '250px' }} />
            <div className="card-body d-flex align-items-center flex-column w-100">
                <h3 className="card-title">{shorten(props.title)}</h3>
                <h5 className="card-title text-secondary">{props.price} $</h5>
                <div className='d-flex align-items-center justify-content-center flex-column w-100 mt-4'>
                    <Link to={`/products/${props.id}`} className='btn btn-outline-primary w-50'>Details</Link>
                    <div className='w-50 mt-2 d-flex align-items-center justify-content-center'>

                        {quantityCount(state, props.id) === 1 && <button className='btn btn-outline-primary'
                            onClick={() => dispatch(removeItem(props))}>
                            <img style={{width:'20px'}} src={trashIcon} alt='trashIcon' />
                        </button>}
                        {quantityCount(state, props.id) > 1 && <button className='btn btn-outline-danger' onClick={() => dispatch(decrease(props))}>-</button>}
                        {quantityCount(state, props.id) > 0 && <span className='mx-2'>{quantityCount(state, props.id)}</span>}
                        {
                            isInCart(state, props.id) ?
                                <button className='btn btn-outline-primary' onClick={() => dispatch(increase(props))}>+</button> :
                                <button className='btn btn-outline-dark w-100' onClick={() => dispatch(addItem(props))}>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
