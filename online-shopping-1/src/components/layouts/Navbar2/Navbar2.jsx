import React from 'react';
import './Navbar2 style/Navbar2.css';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'phosphor-react';
import FallbackAvatars from '../../../ui/Navbar 1 Profile/Navbar1ProfileIcon';


export default function Navbar2() {
    return (
        <>
            <header className='nav2-sticky'>
                <nav className='nav2-main d-none d-lg-block'>
                    <div className="nav2-cart-wishlist-container d-flex justify-content-between align-items-center">
                        <div className='d-flex'>
                            {/* <Link className='nav2list2 ms-5 text-decoration-none text-white'>FASHION</Link>
                            <Link className='nav2list2 ms-2 text-decoration-none text-white'>SPORTS WEAR</Link> */}
                            <Link to={''} className='nav2list2 ms-5 text-decoration-none text-white'>GROCERY</Link>
                            <Link to={''} className='nav2list2 ms-2 text-decoration-none text-white'>ELECTRONICS</Link>
                        </div>
                        <div className="nav2-list me-5 d-flex align-items-center" >
                            <Tooltip title="Wishlist" placement="bottom" arrow>
                                <Link to={'/wishlist'} className='nav2-wishlist-link'>
                                    <Heart className='nav2-wishlist-icon mx-4' color="white" weight="bold" />
                                </Link>
                            </Tooltip>
                            <Tooltip title="Cart" placement="bottom" arrow>
                                <Link to={'/CartPage'} className='nav2-wishlist-link'>
                                    <ShoppingCart className='nav2-cart-icon mx-4' color="white" weight="bold" />
                                </Link>
                            </Tooltip>
                            <FallbackAvatars/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
