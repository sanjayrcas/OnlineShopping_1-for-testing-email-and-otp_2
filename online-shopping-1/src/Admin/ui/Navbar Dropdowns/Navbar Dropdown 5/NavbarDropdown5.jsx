import React from 'react';
import '../Navbar Dropdown 1/NavbarDropdown.css';
import { Link } from 'react-router-dom';
import { CircleHalf, Moon, Sun } from 'phosphor-react';

export default function NavbarDropdown5() {
    return (
        <div className='nav-dropdown5-main me-sm-2 me-0'>
                    <div className="dropdown nav-dropdown5-container">
                        <button type='button' className="nav-dropdown5-btn border-0 bg-transparent d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                            <Sun className='navDropDown5-icon text-white' />
                        </button>
                        <ul className="dropdown-menu nav-dropdown5-ul">
                            <Link to={'#'} className="dropdown-item">
                                <li className='d-flex align-items-center' >
                                    <Sun className='navDropDown5-icon me-2' />
                                    Profile Page
                                </li>
                            </Link>
                            <Link to={'#'} className="dropdown-item">
                                <li className='d-flex align-items-center' >
                                    <Moon className='navDropDown5-icon me-2' />
                                    Order Invoice
                                </li>
                            </Link>
                            <Link to={'#'} className="dropdown-item">
                                <li className='d-flex align-items-center' >
                                    <CircleHalf className='navDropDown5-icon me-2' weight="fill" />
                                    Logout
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
    )
}
