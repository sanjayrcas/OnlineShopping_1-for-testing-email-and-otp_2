import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavbarDropdown1 from '../../../ui/Navbar Dropdowns/Navbar Dropdown 1/NavbarDropdown1';
import NavbarDropdown2 from '../../../ui/Navbar Dropdowns/Navbar Dropdown 2/NavbarDropdown2';
import NavbarDropdown3 from '../../../ui/Navbar Dropdowns/Navbar Dropdown 3/NavbarDropdown3';
import NavbarDropdown4 from '../../../ui/Navbar Dropdowns/Navbar Dropdown 4/NavbarDropdown4';
import NavbarDropdown5 from '../../../ui/Navbar Dropdowns/Navbar Dropdown 5/NavbarDropdown5';
import Sidebar from '../../../ui/Sidebar/Sidebar';

function Navbar() {
    return (
        <nav className='nav-nav position-sticky top-0 z-3' style={{backgroundColor:'#111827'}}>
            <div className='nav-main'>
                <div className="nav-main-container d-flex justify-content-between align-items-center">
                    <div className="nav-logo-container ms-3">
                        <Link to='#'>
                            <img src='/assets/images/onlineShopping.png' className='nav-logo-img' alt="nav logo img" />
                        </Link>
                    </div>
                    <div className="nav-addIcon-container me-3 d-flex align-items-center">

                        <NavbarDropdown1/>
                        <NavbarDropdown2/>
                        <NavbarDropdown3/>
                        <NavbarDropdown4/>
                        <NavbarDropdown5/>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
