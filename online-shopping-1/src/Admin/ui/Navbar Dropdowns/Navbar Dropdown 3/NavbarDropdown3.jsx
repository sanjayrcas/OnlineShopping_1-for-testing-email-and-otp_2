import React  from 'react';
import '../Navbar Dropdown 1/NavbarDropdown.css';
import { Link } from 'react-router-dom';
import { Bell } from 'phosphor-react';

export default function NavbarDropdown3() {

    const message = [
        {
            productImg : 'https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/413Jh9Lwf5L._MCnd_AC_.jpg',
            productImgName : 'Casual Wear - Men Cheked Shirts',
            productName : 'Casual Wear - Men Cheked Shirts',
            orderCancelDate : '26 April 1:45 Am'
        },
        {
            productImg : 'https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/413Jh9Lwf5L._MCnd_AC_.jpg',
            productImgName : 'Casual Wear - Men Cheked Shirts',
            productName : 'Casual Wear - Men Cheked Shirts',
            orderCancelDate : '26 April 1:46 Am'
        },
    ]
    
    return (
        <div className='nav-dropdown3-main me-sm-2 me-0'>
            <div className="dropdown nav-dropdown3-container">
                <button type='button' className="nav-dropdown3-btn border-0 bg-transparent d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                    <Bell className='navDropDown3-icon text-white' />
                </button>
                <ul className="dropdown-menu nav-dropdown3-ul">
                    <li>
                        {
                            message.map((item,index)=>{
                                return(
                                    <div key={index} className="nav-dropdownNotify-container d-flex align-items-center py-2 mx-2 border-bottom">
                                        <div className="nav-dropdownNotify-profile ms-4 me-3">
                                            <Link to={'#'} className='text-decoration-none text-black'>
                                                <img src={item.productImg} className='Product-img' alt={item.productImgName} />
                                            </Link>
                                        </div>
                                        <div className="nav-dropdownNotify-container">
                                            <Link to={'#'} className='text-decoration-none text-black fw-semibold'>
                                                <p className="nav-Notify-from m-0">{item.productName}</p>
                                            </Link>
                                            <p className='nav-Notify-date m-0 pt-1 text-danger fw-bold'>Order Cancelled</p>
                                            <p className='nav-Notify-date m-0 pt-1'>{item.orderCancelDate}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
