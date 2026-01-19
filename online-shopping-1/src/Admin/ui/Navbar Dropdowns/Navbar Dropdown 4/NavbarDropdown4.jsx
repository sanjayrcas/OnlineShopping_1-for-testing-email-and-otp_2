import React from 'react';
import '../Navbar Dropdown 1/NavbarDropdown.css';
import { Link } from 'react-router-dom';
import { Gear, SignOut, UserCircle } from 'phosphor-react';
import { Invoice } from '@phosphor-icons/react';


export default function NavbarDropdown1() {
    return (
        <div className='nav-dropdown4-main me-sm-2 me-0'>
            <div className="dropdown nav-dropdown4-container">
                <button type='button' className="nav-dropdown4-btn border-0 bg-transparent d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                    <Gear className='navDropDown4-icon text-white' />
                </button>
                <ul className="dropdown-menu nav-dropdown4-ul">
                    <Link to={'/profile'} className="dropdown-item">
                        <li className='d-flex align-items-center' >
                            <UserCircle className='navDropDown4-icon me-2' />
                            Profile Page
                        </li>
                    </Link>
                    <Link to={'#'} className="dropdown-item">
                        <li className='d-flex align-items-center' >
                            <Invoice className='navDropDown4-icon me-2' />
                            Order Invoice
                        </li>
                    </Link>
                    <Link to={'#'} className="dropdown-item">
                        <li className='d-flex align-items-center' >
                            <SignOut className='navDropDown4-icon me-2' />
                            Logout
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
