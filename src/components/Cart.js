import React from 'react';
import { useDispatch } from 'react-redux';

// Functions
import { shorten } from '../helper/functions';

// Icons
import trashIcon from "../assets/icons/trash.svg";

// Style


// Actions
import { removeItem, decrease, increase } from '../redux/cart/cartAction';

const Cart = (props) => {

    const dispatch = useDispatch();
    const { image, title, price, quantity } = props.data;

    return (
        <div className='d-flex align-items-center justify-content-center flex-column p-2 mt-2 border rounded'>
            <img src={image} alt={title} style={{ width: '150px', height: '250px' }} />

            <hr />
            <div>

                <div className='mt-3'>
                    <h5>{shorten(title)}</h5>
                    <h5 className='text-success'>Price:{price} $</h5>
                </div>
                <div>
                    <h6 className='text-success'>Quantity:{quantity}</h6>
                </div>
                <div >
                    {
                        quantity > 1 ?
                            <button className='btn btn-outline-primary' onClick={() => dispatch(decrease(props.data))} >-</button> :
                            <button className='btn btn-outline-primary' onClick={() => dispatch(removeItem(props.data))} ><img src={trashIcon} alt="trash" style={{ width: '20px' }} /></button>
                    }
                    <button className='btn btn-outline-primary mx-2' onClick={() => dispatch(increase(props.data))} >+</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;