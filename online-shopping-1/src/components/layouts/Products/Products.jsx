import React, { useState, useEffect } from 'react';
import './Products style/Products.css';
import './Products MediaQ/MediaQProducts.css';
import { Heart, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from '../../../redux/cartSlice';
import { addToWishlist } from '../../../redux/wishlistSlice';


export default function Products() {

    // redux.
    const cartProducts = useSelector((state)=>state.Cart.cartItems)
    const wishlistProducts = useSelector((state)=>state.Wishlist.wishlistItems)
    const dispatch = useDispatch();

    //add to cart.
    const addToCartBtn = (item)=>{
        dispatch(addToCart(item));
    }
    // add to wishlist.
    const addToWishlistBtn = (item)=>{
        dispatch(addToWishlist(item));
    }

    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products/getAllProducts');
                // const response = await fetch('https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/getAllProducts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (Array.isArray(data)) {
                    setProductData(data);
                    console.log('Data fetched successfully:', data);
                } else {
                    console.error('Unexpected response format:', data);
                    alert('Failed to fetch products. Unexpected data format received.');
                }
            } catch (error) {
                console.error('Error in fetching product data:', error);
                alert('Failed to fetch products. please try again later');
            }
        };
        fetchProducts();
    }, []);

    const PRODUCTS_LIMIT = 12;

    // const searchItems = productData.map(item => (
    const searchItems = productData.slice(0, PRODUCTS_LIMIT).map(item => (
        <div key={item._id} className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6 border-0 bg-transparent product-col card p-0 mb-2">
            <div className="product-inside-container py-1 me-2 border-1 rounded-2 bg-warnin overflow-hidden">
                <Link>
                    <div className="product-img-container card-img">
                        <img src={item.productsImg} className="product-img" alt={item.productsName} />
                    </div>
                </Link>
                <div className="product-details-container px-4 card-body p-0">
                    <Link className="product-details-link text-black text-decoration-none">
                        <p className="product-name m-0 mt-2">
                            {item.productsName}
                        </p>
                        <p className="product-category m-0 mt-2">
                            {item.productsCategory}
                        </p>
                        <p className="product-off-price border rounded-1 p-1 d-inline-block mt-2 mb-0 me-4">
                            ₹{item.productsOriginalPrice}
                            <span className='product-original-price ps-1 m-0 fw-normal text-secondary text-decoration-line-through'>₹20{item.productsOffPrice}</span>
                            <span className="product-offPercentage ps-1 fw-semibold"> {item.productsOffPercentage}% off</span>
                        </p>
                        <p className="product-status d-inline-block text-danger fw-bold mt-1">{item.productsStatus}</p>
                    </Link>
                    <p className="product-description mt-1 m-0 text-black">
                        {item.productsDescription}
                    </p>
                    <div className="product-buyNow-cart-wishlist mt-2 mb-3">
                        <div className='product-buyBtn-container mt-2 d-inline-block'>
                            <Link to={`/SingleProductView/${item._id}`} className="product-buyBtn text-decoration-none px-4 px-lg-4 px-md-3 px-sm-3 py-2 fw-semibold border rounded-2" style={{ backgroundColor: "#fd963a", color: "white" }}>
                                View Product
                            </Link>
                        </div>
                        {
                            wishlistProducts.find(items => items._id === item._id) ?
                            <button className="product-wishlist-btn p-1 border-0 float-end" disabled>
                                <Heart className='product-wishlist-icon' color="#dc3545" />
                            </button> :
                            <button className="product-wishlist-btn p-1 border-0 float-end" onClick={()=>addToWishlistBtn(item)}>
                                <Heart className='product-wishlist-icon' color="#dc3545" />
                            </button>
                        }
                        {
                            cartProducts.find(items => items._id === item._id) ?
                            <button className="product-cart-btn  border-0 p-1 me-1 float-end" disabled>
                                <ShoppingCart className='product-cart-icon' color="#388e3c" />
                            </button> :
                            <button className="product-cart-btn  border-0 p-1 me-1 float-end" onClick={()=>addToCartBtn(item)}>
                                <ShoppingCart className='product-cart-icon' color="#388e3c" />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='product-main py-2'>
            <div className='product-title-container'>
                <p className="product-title ps-3 py-1 fs-5 fw-bold" >Products</p>
            </div>
            <div className="product-main-container">
                <div className="row product-row mx-3">
                    {searchItems}
                </div>
            </div>
        </div>
    )
}
