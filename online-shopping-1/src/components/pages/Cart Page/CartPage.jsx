import React from 'react';
import './CartPage.css';
import './MediaQCartPage.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Info, MinusCircle, PlusCircle, ShieldCheck } from '@phosphor-icons/react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../../../redux/cartSlice';

export default function CartPage() {

    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.Cart.cartItems)

    const totalQuantity = cartProducts.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartProducts.reduce((total, item) => total + item.productsOriginalPrice * item.quantity, 0);
    const totalPrice = totalAmount.toFixed(2);

    const deleteFromCartBtn = (item) => {
        dispatch(deleteFromCart(item));
    }

    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    };

    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }));
        }
    };


    return (
        <div className='cart-main'>
            <Helmet>
                <title>Online Shopping - Cart Page</title>
            </Helmet>
            <h4 className="cart-heading text-white position-sticky top-0 z-1 p-3 fw-bold" style={{ backgroundColor: '#111827' }}>Cart List</h4>
            {/* Breadcrumb Navigation start */}
            <nav className="position-sticky top-0 z-0" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none" style={{ color: '#838383' }}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{ color: '#838383' }} aria-current="page">Cart List</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            {cartProducts.length === 0 ? (
                <div className="text-center">
                    <p>Your cart is empty.</p>
                    <button className="btn btn-light"><Link to='/'>Keep Shopping</Link></button>
                </div>
                ) : 
                (
                    <div className="cart-container my-4">
                        <div className="row mx-2">
                            <div className="col-lg-8 cart-col1 px-2 mb-2 mb-lg-0">
                                {
                                    cartProducts.map((item) => {
                                        return (
                                            <div key={item._id} className="cart-details-container border bg-white px-2 py-2 d-flex">
                                                <div className="cart-img-container d-flex align-items-center">
                                                    <img src={item.productsImg} className="cart-img" alt="cart img 1" />
                                                </div>
                                                <div className="cart-details-container1 py-1">
                                                    <div className="cart-details1 mx-3 d-flex justify-content-between align-items-center">
                                                        <p className="cart-name fw-bold m-0">
                                                            {item.productsName}
                                                        </p>
                                                        <p className='cart-deliveryBy fw-semibold m-0'>
                                                            Delivery by Tue May |
                                                            <span className='text-decoration-line-through mx-1' style={{ color: '#878787' }}>₹40</span>
                                                            <span className='text-success'>Free</span>
                                                        </p>
                                                    </div>
                                                    <div className="cart-details2 mx-3">
                                                        <p className='cart-size mb-1' style={{ color: '#878787' }}>Size: XL</p>
                                                        <p className='cart-seller mb-0' style={{ color: '#878787' }}>Seller: SnitchApparels</p>
                                                        <div className="cart-quantity-container d-flex align-items-center">
                                                            <button className='MinusCircle border-0 bg-white' onClick={() => decrementCart(item._id, item.quantity)}>
                                                                <MinusCircle className='text-secondary' weight="bold" />
                                                            </button>
                                                            <p className='cart-quantity-count m-0 mx-1 mt-2 border border-secondary'>{item.quantity}</p>
                                                            <button className='PlusCircle border-0 bg-white' onClick={() => incrementCart(item._id, item.quantity)}>
                                                                <PlusCircle className='text-secondary' weight="bold" />
                                                            </button>
                                                        </div>
                                                        <p className='cart-originalPrice fw-bold mt-1 d-flex align-items-center'>
                                                            <span className='cart-original-price text-decoration-line-through fw-semibold me-2' style={{ color: '#878787' }}>₹20{item.productsOffPrice}</span>
                                                            {/* ₹{item.productTotal}200 */} ₹{item.productsOriginalPrice * item.quantity}
                                                            <span className=' fw-semibold mx-2 text-success'>32% Off</span>
                                                            <span className='cart-coupon fw-semibold text-success d-flex align-items-center'>
                                                                1 coupon applied
                                                                <Info size={15} className='text-success ms-1' weight="fill" />
                                                            </span>
                                                        </p>
                                                        <button type='submit' onClick={() => deleteFromCartBtn(item)} className='btn-remove border-0 bg-danger text-white px-2 py-1 rounded-1 fw-semibold'>REMOVE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                                <hr className='m-0' />
                            </div>
                            <div className="col-lg-4 p-0">
                                <div className="price-details-container border mx-2 py-2 bg-white">
                                    <div className="price-details-heading">
                                        <p className='m-0 py-2 fw-semibold ps-3'>PRICE DETAILS</p>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="price-details-list">
                                        <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 py-2'>Price ({totalQuantity} items)</p>
                                            <span>₹{totalPrice}</span>
                                        </div>
                                        {/* <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 py-2'>Discount</p>
                                            <span className='text-success'>- ₹8,368</span>
                                        </div>
                                        <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 py-2'>Buy more & save more</p>
                                            <span className='text-success'>- ₹137</span>
                                        </div>
                                        <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 py-2'>Platform Fee</p>
                                            <span>₹5</span>
                                        </div>
                                        <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 py-2'>Delivery Charges</p>
                                            <div className="div">
                                                <span className='delivery-charge text-decoration-line-through'>₹80</span>
                                                <span className="delivery-charge-fee text-success ">Free</span>        
                                            </div>
                                        </div> */}
                                        <hr className='hr-dashed mx-3' />
                                        <div className="total-items d-flex justify-content-between align-items-center px-3">
                                            <p className='m-0 fw-bold'>Total Amount</p>
                                            <span className='fw-bold'>₹{totalPrice}</span>
                                        </div>
                                        <hr className='hr-dashed mx-3' />
                                        <p className='ms-3 text-success fw-semibold'>You will save ₹8,500 on this order</p>
                                    </div>
                                    <div className="safe-secure  mx-3 d-flex align-items-center" style={{ backgroundColor: '#e3e6e6' }}>
                                        <ShieldCheck size={35} color="#878787" weight="fill" />
                                        <p className='safe-secure m-0 ms-2 fw-bold'>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                                    </div>
                                    <div className="placeOrder text-center mt-3">
                                        <button className="btn btn-danger border fw-semibold">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
