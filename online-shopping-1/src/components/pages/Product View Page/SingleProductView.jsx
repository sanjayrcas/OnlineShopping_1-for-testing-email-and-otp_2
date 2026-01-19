import React, { useEffect, useState } from "react";
import "./ProductView.css";
import './MediaQProductView.css';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ChatCenteredText, Heart, Minus, Plus, ShuffleSimple } from 'phosphor-react';
import ProductViewRatings from "./ui Ratings/ProductViewRatings";

const SingleProductView = () => {

    const { id } = useParams();
    const [item, setItem] = useState({
        productsImg: '',
        productsName: '',
        productsOriginalPrice: '',
    })
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/getProductById/${id}`)
        // fetch(`https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/getProductById/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    })

    return (
        <div className="productView-main">
            <Helmet>
                <title>
                    Online Shopping - View Single Product
                </title>
            </Helmet>
            <h4 className="productView-heading text-white position-sticky top-0 z-1 p-3 fw-bold" style={{ backgroundColor: '#111827' }}>View Product</h4>
            {/* Breadcrumb Navigation start */}
            <nav className="viewProduct-breadCrump" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none" style={{ color: '#838383' }}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{ color: '#838383' }} aria-current="page">View Product</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            <div key={item._id} className="row m-0 mx-2"> {/* my-3 */}
                <div className="col-lg-6 col-12 bg-inf pe-lg-2 p-0 ">
                    <div className="carousel-container mb-3 bg-white rounded-3 border border-secondary p-5 position-sticky top-0">
                        <div className="main-image bg-warnin">
                            <img src={item.productsImg} alt="Main product" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 bg-white productView-col2 border mb-3 py-3 mt-3 mt-lg-0 border-secondary rounded-2">
                    <div className="productView-details-container bg-warnin mx-2 ">
                        <p className="Brand-name"><Link className="text-decoration-none fw-semibold">Brand: Generic</Link></p>
                        <p className="product-name m-0">{item.productsName}</p>
                        <div className="productView-price-ratings mt-lg-2 bg-inf d-flex flex-wrap justify-content-between align-items-center">
                            <p className="productView-off-price bg-warnin p-1 d-inline-block mb-0 me-4">
                                ₹{item.productsOriginalPrice}
                                <span className='productView-original-price ps-1 m-0 fw-normal text-secondary text-decoration-line-through'>M.R.P: ₹1,299</span>
                                <span className="productView-offPercentage ps-1 fw-semibold">-79% off</span>
                            </p>
                            <ProductViewRatings />
                        </div>
                        <div className="productView-quan-cart-wish mt-3 bg-inf d-flex justify-content-md-evenly align-items-center" >
                            <div className="productView-quantity border border-black rounded-5 py-xl-2 py-1 d-flex justify-content-evenly align-items-center">
                                <Minus className="minus" color="#080808" /><span className="fw-bold">1</span><Plus className="plus" color="#080808" />
                            </div>
                            <div className="productView-addToCart overflow-hidden bg-inf px-xl-3 px-1 bg-warnin">
                                <button className="productView-addToCart-btn btn rounded-5 fw-semibold text-white px-xl-4 px-3" style={{ backgroundColor: '#d91600', wordSpacing: '-3px' }}>ADD TO CART</button>
                            </div>
                            <div className="productView-wish-compare">
                                <Link>
                                    <Heart className="productView-wishlist bg-warnin me-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" color="#080808" />
                                </Link>
                                <Link>
                                    <ShuffleSimple className="productView-compare bg-succes" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" color="#080808" />
                                </Link>
                            </div>
                        </div>
                        <p className="mt-4">
                            <button style={{ width: '60%' }} className="buyIt-now btn btn-dark fw-semibold rounded-5">BUY IT NOW</button>
                        </p>
                        <p className="text-secondary">Availability: <span className="text-black productView-key">In Stock</span></p>
                        <p className="text-secondary">Color: <span className="text-black productView-key">Multicolour</span></p>
                        <div className="text-secondary bg-inf">
                            <p className="fw-bold">Product details</p>
                            <div className="product-details-container">
                                <div className="row">
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Material composition</div>
                                    <div className="productView-key col-6 bg-warnin">Cotton</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Fit type</div>
                                    <div className="productView-key col-6 bg-warnin">Regular Fit</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Sleeve type</div>
                                    <div className="productView-key col-6 bg-warnin">Long Sleeve</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Collar style</div>
                                    <div className="productView-key col-6 bg-warnin">Spread Collar</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Length</div>
                                    <div className="productView-key col-6 bg-warnin">Standard Length</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Neck style</div>
                                    <div className="productView-key col-6 bg-warnin">Collared Neck</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Country of Origin</div>
                                    <div className="productView-key col-6 bg-warnin">India</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="text-secondary bg-inf">
                            <p className="fw-bold">About this item</p>
                            <ul>
                                <li className="productView-key text-black">Fabric :- Cotton Blend , Closure :- Button , Occasion :- Casual , Fit :- Regular Fit , Pattern - Checked</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="text-secondary bg-inf">
                            <p className="fw-bold">Additional Information</p>
                            <div className="product-details-container">
                                <div className="row">
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Manufacturer</div>
                                    <div className="productView-key col-6 bg-warnin">Trybuy.in</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Packer</div>
                                    <div className="productView-key col-6 bg-warnin">Trybuy.in</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Item Weight</div>
                                    <div className="productView-key col-6 bg-warnin">239 g</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Item Dimensions</div>
                                    <div className="productView-key col-6 bg-warnin">21 x 19 x 3</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">LxWxH</div>
                                    <div className="productView-key col-6 bg-warnin">Centimeters</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Net Quantity</div>
                                    <div className="productView-key col-6 bg-warnin">1 Piece</div>
                                    <div className="productView-key col-6 bg-inf text-black fw-semibold">Generic Name</div>
                                    <div className="productView-key col-6 bg-warnin">Dress Shirt</div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <Link className="productView-key text-decoration-none"><ChatCenteredText className="chatCenteredTextIcon me-1" color="#080808" />Report an issue with this product</Link>
                            <hr />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SingleProductView;
