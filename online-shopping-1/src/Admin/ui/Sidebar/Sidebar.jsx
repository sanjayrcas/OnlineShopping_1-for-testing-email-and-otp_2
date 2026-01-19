import React from 'react';
import './Sidebar.css';
import '../Navbar Dropdowns/Navbar Dropdown 1/NavbarDropdown.css';
import './MediaQSidebar.css'
import { List, X } from 'phosphor-react';
import { Link } from 'react-router-dom';
// import ImageAvatars from '../Profile/Profile';
import SidebarAccordion from './SidebarAccordion';


export default function Sidebar() {

    const sidebarDataList1 = [
        {
            sidebarIcon: <i className="bi bi-journal-check sidebar-items-icon text-white"></i>,
            sidebarName: 'Orders List'
        },
        {
            sidebarIcon: <i className="bi bi-person sidebar-items-icon text-white  sidebar-items-icon text-white"></i>,
            sidebarName: 'Customers & Orders'
        },
        {
            sidebarIcon: <i className="bi bi-person-lines-fill  sidebar-items-icon text-white"></i>,
            sidebarName: 'Manage Users'
        },
        {
            sidebarIcon: <i className="bi bi-grid  sidebar-items-icon text-white"></i>,
            sidebarName: 'Categories'
        },
        {
            sidebarIcon: <i className="bi bi-ui-checks-grid  sidebar-items-icon text-white"></i>,
            sidebarName: 'Brands'
        },
        {
            sidebarIcon: <i className="bi bi-star  sidebar-items-icon text-white"></i>,
            sidebarName: 'Reviews & Ratings'
        },
        {
            sidebarIcon: <i className="bi bi-card-heading  sidebar-items-icon text-white"></i>,
            sidebarName: 'Refunds Request'
        },
        {
            sidebarIcon: <i className="bi bi-cart-x  sidebar-items-icon text-white"></i>,
            sidebarName: 'Order Cancel Request'
        },
        {
            sidebarIcon: <i className="bi bi-clock-history  sidebar-items-icon text-white"></i>,
            sidebarName: 'Order Cancel History'
        },
        {
            sidebarIcon: <i className="bi bi-person-circle  sidebar-items-icon text-white"></i>,
            sidebarName: 'Profile',
            sidebarLink: '/profile'
        },
        {
            sidebarIcon: <i className="bi bi-box-arrow-right  sidebar-items-icon text-white"></i>,
            sidebarName: 'Logout'
        },
    ]
    
    return (
        <div className='sidebar-main'>
            <div className="sidebar-main-container">
                <button className="sidebar-btn border-0 bg-transparent d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <List className='sidebar-icon text-white' />
                </button>
                <div className="offcanvas offcanvas-start sidebar-offcanvas" data-bs-scroll="true" data-bs-backdrop="true" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="sidebar-profile-container mt-3 pb-3">
                        <div className="profile-img-container d-flex ps-3">
                            <Link>
                                {/* <ImageAvatars/> */}
                            </Link>
                            <div className="profile-user-container">
                                <Link className=' text-decoration-none text-white'><p className='profile-user-name fw-semibold m-0'>sanjay</p></Link>
                                <p className='profile-admin fw-semibold text-danger m-0'>Admin Profile</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="sidebar-btn-close border-0 bg-transparent" data-bs-dismiss="offcanvas" aria-label="Close" >
                        <X color="#4a2a3e" className='bg-white' weight="bold" />
                    </button>
                    <div className="offcanvas-body p-0 mt-3 pb-4">
                        <div className="sidebar-items-data">
                            <Link to={'#'} className='sidebar-items-link ps-4 py-2 text-decoration-none text-white d-flex align-items-center'>
                                <i className="bi bi-house sidebar-items-icon text-white"></i>
                                <p className='m-0 ms-3 fw-semibold text-white'>Dashboard</p>
                            </Link>
                        </div>
                        <SidebarAccordion/>
                        <div className="sidebar-items-data">
                            {
                                sidebarDataList1.map((item,index)=>{
                                    return(
                                        <Link key={index} to={item.sidebarLink} className='sidebar-items-link ps-4  py-2 text-decoration-none text-white d-flex align-items-center'>
                                            {item.sidebarIcon}
                                            <p className='m-0 ms-3 fw-semibold text-white'>{item.sidebarName}</p>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
