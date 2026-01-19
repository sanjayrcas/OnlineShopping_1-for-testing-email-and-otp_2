import React from 'react';
import './Wishlist.css';
import './MediaQWishlist.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Info } from '@phosphor-icons/react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../../../redux/wishlistSlice';

export default function Wishlist() {

    const wishlistProduct = useSelector((state)=> state.Wishlist.wishlistItems)
    const dispatch = useDispatch();

    const deleteFromWishlistBtn = (item)=>{
        dispatch(deleteFromWishlist(item));
    }

        return (
        <div className='wishlist-main'>
            <Helmet>
                <title>
                    Online Shopping - Wishlist Page
                </title>
            </Helmet>
            <h4 className="wishlist-heading text-white position-sticky top-0 z-1 p-3 fw-bold" style={{backgroundColor:'#111827'}}>wishlist List</h4>
            {/* Breadcrumb Navigation start */}
            <nav className="wishlist-breadCrump" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none"  style={{color: '#838383'}}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{color: '#838383'}} aria-current="page">Wishlist List</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            <div className="wishlist-container my-4 mx-3 bg-transparent">
                    <div className="wishlist-col1 mb-2 mb-lg-0">
                       { 
                            wishlistProduct.map((item)=>{
                                return(
                                    <div key={item._id} className="wishlist-details-container border bg-white mb-2 px-2 py-2 d-flex">
                                        <div className="wishlist-img-container d-flex align-items-center">
                                            <img src={item.productsImg} className="wishlist-img" alt="wishlist img 1" />
                                        </div>
                                        <div className="wishlist-details-container1 py-1">
                                            <div className="wishlist-details1 mx-3 d-flex justify-content-between align-items-center">
                                                <p className="wishlist-name fw-bold m-0">
                                                    {item.productsName} 
                                                </p>
                                                <p className='wishlist-itemAddOn fw-semibold m-0'>
                                                    Item added 14 May 2025
                                                </p>
                                            </div>
                                            <div className="wishlist-details2 mx-3">
                                                <p className='wishlist-size mb-1' style={{color: '#878787'}}>Size: XL</p>
                                                <p className='wishlist-seller mb-0' style={{color: '#878787'}}>Seller: SnitchApparels</p>
                                                <p className='wishlist-originalPrice fw-bold mt-1 d-flex align-items-center'>
                                                    <span className='wishlist-original-price text-decoration-line-through fw-semibold me-2' style={{color: '#878787'}}>₹20{item.productsOffPrice}</span>
                                                        ₹{item.productsOriginalPrice}
                                                    <span className=' fw-semibold mx-2 text-success'>32% Off</span>
                                                    <span className='wishlist-coupon fw-semibold text-success d-flex align-items-center'>
                                                        1 coupon applied
                                                        <Info size={15} className='text-success ms-1' weight="fill" />
                                                    </span>
                                                </p>
                                                <button type='button' className='btn-viewProduct me-2 border-0 bg-success text-white px-2 py-1 rounded-1 fw-semibold'>
                                                    <Link to={`/SingleProductView/${item._id}`}  className='text-decoration-none text-white'>View Product</Link>
                                                </button>
                                                <button type='submit' className='btn-remove border-0 bg-danger text-white px-2 py-1 rounded-1 fw-semibold' onClick={()=>deleteFromWishlistBtn(item)}>REMOVE</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}
