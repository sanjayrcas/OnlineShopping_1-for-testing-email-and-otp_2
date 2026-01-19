import React  from 'react';
import '../Navbar Dropdown 1/NavbarDropdown.css';
import { EnvelopeSimple, User } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function NavbarDropdown2() {

    const message = [
        {
            userIcon : <User className='nav-dropdownMsg-user text-black' weight="bold" />,
            senderName : 'Sanjay',
            msgRecivedOn : '26 April 1:45 Am'
        },
        {
            userIcon : <User className='nav-dropdownMsg-user text-black' weight="bold" />,
            senderName : 'Sanjana',
            msgRecivedOn : '26 April 1:45 Am'
        },
    ]
    
    return (
        <div className='nav-dropdown2-main me-sm-2 me-0'>
            <div className="dropdown nav-dropdown2-container">
                <button type='button' className="nav-dropdown2-btn border-0 bg-transparent d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                    <EnvelopeSimple className='navDropDown2-icon text-white' />
                </button>
                <ul className="dropdown-menu nav-dropdown2-ul">
                    <li>
                        {
                            message.map((item,index)=>{
                                return(
                                    <div key={index} className="nav-dropdownMsg-container d-flex align-items-center py-2 mx-2 border-bottom">
                                        <div className="nav-dropdownMsg-profile ms-4 me-3">
                                            <Link to={'#'} className='text-decoration-none text-black'>
                                                {item.userIcon}
                                            </Link>
                                        </div>
                                        <div className="nav-dropdownMsg-container">
                                            <Link to={'#'} className='text-decoration-none text-black fw-semibold'>
                                                <p className="nav-msg-from m-0">Mail from {item.senderName}</p>
                                            </Link>
                                            <p className='nav-msg-date m-0'>{item.msgRecivedOn}</p>
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
