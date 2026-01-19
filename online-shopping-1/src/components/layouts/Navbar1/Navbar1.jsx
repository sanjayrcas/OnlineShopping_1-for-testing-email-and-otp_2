import React from 'react';
import './Navbar1 Style/Navbar1.css';
import './Navbar1 mediaQ/MediaQNavbar1.css';
import Navbar1Sidebar from './Navbar1Sidebar';
import { Link } from 'react-router-dom';
import { Heart, MagnifyingGlass, ShoppingCart } from 'phosphor-react';
import FallbackAvatars from '../../../ui/Navbar 1 Profile/Navbar1ProfileIcon';
import Tooltip from '@mui/material/Tooltip';


export default function Navbar1() {
    return (
        <>
            <header className='position-sticky top-0 z-2' style={{backgroundColor: "#37475a"}}>
                <nav style={{backgroundColor: '#111827'}}>
                    {/* <div className="nav-items-container d-flex justify-content-none justify-content-lg-between"> */}
                    <div className="nav-items-container d-flex justify-content-between">
                        <div className="nav-logo-items d-flex align-items-center">
                            {/* nav 1 sidebar */}
                            <Navbar1Sidebar/>
                            <Link to='#'>
                                <img src='/assets/images/onlineShopping.png' className='nav-logo ms-lg-3 ms-0' alt="Navbar Logo" />
                            </Link>
                            <div className="nav-items1 d-none d-lg-block">
                                <ul className='nav-items-ul d-flex m-0 list-unstyled'>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>MEN</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>WOMEN</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>KIDS</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>BLOGS</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>BRANDS</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={''} className='nav-items1-list-link'>CATEGORIES</Link>
                                    </li>
                                    <li className='nav-items1-list'>
                                        <Link to={'/showAllProducts'} className='nav-items1-list-link'>PRODUCTS</Link>
                                        <p className='nav-items1-list-span'>NEW</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-input-container me-3">
                            <MagnifyingGlass className='nav-input-search-icon ms-2' color="#7b7b7b" weight="bold" /> 
                            <div className="nav-input-div">
                                <input type="text" className='nav-input' placeholder='Search for products, brands and more'/>
                            </div>
                        </div>
                        <div className="nav-cart-wishlist-container me-3 d-lg-none d-flex align-items-center">
                            <Tooltip title="Wishlist" placement="bottom" arrow>
                                <Link to='/wishlist' className='nav-wishlist-link bg-inf p-1'>
                                    <Heart className='nav-wishlist-icon mx-2' color="white" weight="bold" />
                                </Link>
                            </Tooltip>
                            <Tooltip title="Cart" placement="bottom" arrow>
                                <Link to={'/CartPage'} className='nav-cart-link bg-succes p-1'>
                                    <ShoppingCart className='nav-cart-icon mx-2' color="white" weight="bold" />
                                </Link>
                            </Tooltip>
                            {/* Navbar 1 profile icon */}
                            <FallbackAvatars/>
                        </div>
                    </div>
                </nav>
                {/* nav1 md search */}
                <nav>
                    <div className="nav1-input-container px-3 py-2 d-block d-lg-none">
                        <MagnifyingGlass className='nav1-input-search-icon ms-2' color="#7b7b7b" weight="bold" /> 
                        <div className="nav1-input-div">
                            <input type="text" className='nav1-input' placeholder='Search for products, brands and more'/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}