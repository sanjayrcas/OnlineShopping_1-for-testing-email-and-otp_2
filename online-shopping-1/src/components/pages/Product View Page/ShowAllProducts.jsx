import React, { useState, useEffect } from 'react';
import './ShowAllProducts.css';
import '../../layouts/Products/Products style/Products.css';
import '../../layouts/Products/Products MediaQ/MediaQProducts.css';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { addToWishlist } from '../../../redux/wishlistSlice';

export default function ShowAllProducts() {
    const cartProducts = useSelector((state) => state.Cart.cartItems);
    const wishlistProducts = useSelector((state) => state.Wishlist.wishlistItems);
    const dispatch = useDispatch();

    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [filters, setFilters] = useState({
        name: '',
        priceSort: '',
        priceRange: 5000,
        category: '',
    });

    const addToCartBtn = (item) => {
        dispatch(addToCart(item));
    };

    const addToWishlistBtn = (item) => {
        dispatch(addToWishlist(item));
    };

    const API_BASE_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await fetch('http://localhost:5000/api/products/getAllProducts');
                const response = await fetch(`${API_BASE_URL}/api/products/getAllProducts`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (Array.isArray(data)) {
                    setProductData(data);
                    setFilteredData(data);
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
    }, [API_BASE_URL]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        let temp = [...productData];

        // Filter by name
        if (filters.name) {
            temp = temp.filter((item) =>
                item.productsName.toLowerCase().includes(filters.name.toLowerCase())
            );
        }

        // Filter by category
        if (filters.category) {
            temp = temp.filter((item) =>
                item.productsCategory.toLowerCase() === filters.category.toLowerCase()
            );
        }

        // Filter by price range
        if (filters.priceRange) {
            temp = temp.filter(
                (item) => item.productsOriginalPrice <= parseInt(filters.priceRange)
            );
        }

        // Sort by price
        if (filters.priceSort === 'lowToHigh') {
            temp.sort((a, b) => a.productsOriginalPrice - b.productsOriginalPrice);
        } else if (filters.priceSort === 'highToLow') {
            temp.sort((a, b) => b.productsOriginalPrice - a.productsOriginalPrice);
        }

        setFilteredData(temp);
    };

    return (
        <div className="product-main">
            <Helmet>
                <title>
                    Online Shopping - View All Products
                </title>
            </Helmet>
            <div className="product-title-container bg-dark position-sticky top-0 z-1">
                <p className="product-title text-white ps-3 py-2 mb-0 fs-5 fw-bold">View All Products</p>
            </div>
            {/* Breadcrumb Navigation start */}
            <nav className="wishlist-breadCrump" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none" style={{ color: '#838383' }}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{ color: '#838383' }} aria-current="page">View All Products</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            <div className="product-main-container row m-0">
                {/* Filters Sidebar */}
                <div className="col-12 col-lg-2 bg-dange">
                    <div className="filters-sidebar bg-white p-2 mx-1 mb-2 rounded-2">
                        <h5 className="mb-3 text-center  fw-bold mt-4">Filters</h5>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Filter by Name</label>
                            <input type="text" className="form-control" placeholder="Search by name" name="name" 
                            value={filters.name} onChange={handleFilterChange} 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Sort by Price</label>
                            <select className="form-select" name="priceSort" value={filters.priceSort} onChange={handleFilterChange} >
                                <option value="">Select</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Price Range (Max ₹{filters.priceRange})</label>
                            <input type="range" className="form-range" min="0" max="5000" 
                                name="priceRange" value={filters.priceRange} onChange={handleFilterChange} 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Filter by Category</label>
                            <select
                                className="form-select" name="category" value={filters.category} onChange={handleFilterChange} >
                                <option value="">All</option>
                                <option value="electronics">Men's Collections</option>
                                <option value="fashion">Women's Collections</option>
                                <option value="home">Kid's Collections</option>
                            </select>
                        </div>

                        <button className="btn btn-primary fw-bold w-100" onClick={applyFilters}>
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* show all products */}
                <div className="bg-warnin mb-2 col-12 col-lg-10">
                    <div className="row product-row mx-1">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div
                                    key={item._id}
                                    className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6 border-0 bg-dange bg-transparent card product-col sap-product-card p-0 mb-2"
                                >
                                    <div className="product-inside-container sap-product-inside-container py-1 me-2 border-1 rounded-2 bg-warnin overflow-hidden">
                                        <Link>
                                            <div className="product-img-container card-img">
                                                <img
                                                    src={item.productsImg}
                                                    className="product-img"
                                                    alt={item.productsName}
                                                />
                                            </div>
                                        </Link>

                                        <div className="product-details-container px-4 card-body p-0">
                                            <Link className="product-details-link text-black text-decoration-none">
                                                <p className="product-name m-0 mt-2">{item.productsName}</p>
                                                <p className="product-category m-0 mt-2">{item.productsCategory}</p>
                                                <p className="product-off-price border rounded-1 p-1 d-inline-block mt-2 mb-0 me-4">
                                                    ₹{item.productsOriginalPrice}
                                                    <span className="product-original-price ps-1 m-0 fw-normal text-secondary text-decoration-line-through">
                                                        ₹20{item.productsOffPrice}
                                                    </span>
                                                    <span className="product-offPercentage ps-1 fw-semibold">
                                                        {item.productsOffPercentage}% off
                                                    </span>
                                                </p>
                                                <p className="product-status d-inline-block text-danger fw-bold mt-1">
                                                    {item.productsStatus}
                                                </p>
                                            </Link>

                                            <p className="product-description sap-product-description mt-1 m-0 text-black">
                                                {item.productsDescription}
                                            </p>

                                            <div className="product-buyNow-cart-wishlist sap-product-buyNow-cart-wishlist mt-2 mb-3">
                                                <div className="product-buyBtn-container mt-2 d-inline-block">
                                                    <Link
                                                        to={`/SingleProductView/${item._id}`}
                                                        className="product-buyBtn text-decoration-none px-4 px-lg-3 px-md-3 px-sm-3 py-2 fw-semibold border rounded-2"
                                                        style={{ backgroundColor: '#fd963a', color: 'white' }}
                                                    >
                                                        View Product
                                                    </Link>
                                                </div>

                                                {wishlistProducts.find((items) => items._id === item._id) ? (
                                                    <button
                                                        className="product-wishlist-btn p-1 border-0 float-end"
                                                        disabled
                                                    >
                                                        <Heart className="product-wishlist-icon" color="#dc3545" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="product-wishlist-btn p-1 border-0 float-end"
                                                        onClick={() => addToWishlistBtn(item)}
                                                    >
                                                        <Heart className="product-wishlist-icon" color="#dc3545" />
                                                    </button>
                                                )}

                                                {cartProducts.find((items) => items._id === item._id) ? (
                                                    <button
                                                        className="product-cart-btn border-0 p-1 me-1 float-end"
                                                        disabled
                                                    >
                                                        <ShoppingCart className="product-cart-icon" color="#388e3c" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="product-cart-btn border-0 p-1 me-1 float-end"
                                                        onClick={() => addToCartBtn(item)}
                                                    >
                                                        <ShoppingCart className="product-cart-icon" color="#388e3c" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No products found matching the filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
