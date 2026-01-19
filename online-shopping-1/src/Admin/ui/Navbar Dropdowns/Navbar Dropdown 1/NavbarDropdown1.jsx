import React from 'react';
import './NavbarDropdown.css';
import './MediaQNavbarDropdown.css';
import { Link } from 'react-router-dom';
import { PlusSquare } from '@phosphor-icons/react';


export default function NavbarDropdown1() {
    return (
        <div className='nav-dropdown1-main me-sm-2 me-0'>
            <div className="dropdown nav-dropdown1-container">
                <button type='button' className="nav-dropdown1-btn border-0 bg-transparent d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                    <PlusSquare className='navDropDown1-icon text-white' />
                </button>
                <ul className="dropdown-menu nav-dropdown1-ul">
                    <li><Link to={'/addProduct'} className="dropdown-item">Add Product</Link></li>
                    <li><Link to={'/addBlogs'} className="dropdown-item">Add Blog</Link></li>
                    <li><Link to={'#'} className="dropdown-item">Add Member</Link></li>
                </ul>
            </div>
        </div>
    )
}
