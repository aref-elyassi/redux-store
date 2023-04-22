import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';
import { clear, checkout } from "../redux/cart/cartAction";

const ShopCart = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cartState)
    return (
        <div className='container mt-4'>
            <div className='row gap-1 d-flex justify-content-between'>
                <div className='col-md-9 border py-2 rounded d-flex align-items-center justify-content-evenly  flex-wrap'>

                    {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                </div>

                <div className='col-md-2 d-flex border rounded h-50 p-4 justify-content-center'>
                    {

                        state.itemsCounter > 0 && <div >
                            <h5><span>Total Items:</span> {state.itemsCounter}</h5>
                            <h5><span>Total Payments:</span> {state.total} $</h5>
                            <div className='d-flex justify-content-evenly'>
                                <button className='btn btn-outline-danger' onClick={() => dispatch(clear())}>Clear</button>
                                <button className='btn btn-outline-dark' onClick={() => dispatch(checkout())}>Checkout</button>
                            </div>
                        </div>
                    }
                </div>

                {
                    state.itemsCounter === 0 && !state.checkout && <div >
                        <h3>Want to buy?</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
                }

                {
                    state.checkout && <div >
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default ShopCart;