import React from 'react';
import './Navbar1 mediaQ/MediaQNavbar1.css';
import { List, X } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Navbar1Sidebar() {
    const NavItems1Sidebar = [
        {
            listName : "HOME",
        },
        {
            listName : "MEN",
        },
        {
            listName : "WOMEN",
        },
        {
            listName : "KIDS",
        },
        {
            listName : "BLOGS",
        },
        {
            listName : "CATEGORIES",
        },
        {
            listName : "PRODUCTS",
            pageLink1: '/MoreProducts'
        },
        {
            listName : "FASHION",
        },
        {
            listName : "SPORTS WEAR",
        },
    ]
    const NavItem2Sidebar = [
        {
            listName : 'YOUR ACCOUNT',
        },
        {
            listName : 'CART',
            pageLink2: '/CartPage'
        },
        {
            listName : 'WISHLIST',
            pageLink2 : '/wishlist'
        },
        {
            listName : 'ORDERS',
            pageLink2 : '/orders'
        },
        {
            listName : 'PAYMENT',
        },
        {
            listName : 'REVIEWS',
        },
        {
            listName : 'LOGOUT',
        }
    ]

    return (
        <>
            <button className="btn me-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <List size={20} color="#fcfcfc" />
            </button>
            <div className="offcanvas offcanvas-start nav-1-sidebar-container overflow-y-hidden" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header nav-1-sidebar-header">
                    <Link><img src='/assets/images/onlineShopping.png' className='nav-sidebar-logo' alt="Navbar Logo" /></Link>
                    <button type="button" className="Nav1-sidebar-closeIcon border-0 bg-transparent ms-4 p-1" data-bs-dismiss="offcanvas" aria-label="Close">
                        <X size={25} color="white" weight="bold" />   
                    </button>
                </div>
                <div className="offcanvas-body nav-1-sidebar-body p-0 my-4">
                    {
                        NavItems1Sidebar.map((item, index) =>{
                            return (
                                <Link to={item.pageLink1} className="nav1-sidebar-container text-decoration-none ps-4 mb-1 py-2 d-flex justify-content-between align-items-center" key={index}>
                                    <div className="nav1-sidebar-items-container">{item.listName}</div>
                                </Link>
                            )
                        })
                    }
                    <hr className='custom-hr'/>
                    {
                        NavItem2Sidebar.map((item, index) =>{
                            return (
                                <Link to={item.pageLink2} className="nav1-sidebar-container text-decoration-none ps-4 mb-1 py-2 d-flex justify-content-between align-items-center" key={index}>
                                    <div className="nav1-sidebar-items-container">{item.listName}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
