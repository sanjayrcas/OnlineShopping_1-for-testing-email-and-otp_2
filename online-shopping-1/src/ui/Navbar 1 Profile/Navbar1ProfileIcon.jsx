import * as React from 'react';
import '../../components/layouts/Navbar2/Navbar2 style/Navbar2.css'; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

export default function FallbackAvatars() {

    const navbarProfile = [
        {
            // navProfileIconImg:<Avatar src="/static/images/avatar/3.jpg" alt="Cindy Baker" className='Nav-profile-icon my-1 ms-1' />,
            // navProfileIconUserCircle:<Avatar src="/broken-image.jpg" className='Nav-profile-icon my-1 ms-1'/>,
            navProfileIconText:<Avatar sx={{ bgcolor: deepOrange[500] }} className='Nav-profile-icon my-1 ms-1' >S</Avatar>,
            navProfileUserName: "Sanjay G",
            navProfileUserProfile: "User Profile",
            navProfileContactUs: "Contact Us",
            navProfileOrders: "My Orders", 
            navProfileOrdersLink: '/orders',
            navProfileFaq: "FAQ",
            navProfileAboutUs: "About Us",
            navProfileLogin: "Logout"
        }
    ]

    return (
        // <Stack direction="row" spacing={2}>
        //     <Avatar src="/broken-image.jpg" className='Nav-profile-icon my-1 ms-1'/>
        // </Stack>
        <div className="dropdown z-1">
            <Link className="nav1-outside-userCircle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Stack direction="row" className='bg-warnin' spacing={2}>
                    <Avatar src="/broken-image.jpg" className='Nav-profile-icon nav2-profile-icon my-1 mx-sm-4'/>
                </Stack>
            </Link>
            {
                navbarProfile.map((item,index)=>{
                    return(
                        <ul key={index} className="dropdown-menu nav1-profile-dropdown">
                            <li className='bg-inf d-flex align-items-center'>
                                <Link className="nav1-inside-userCircle ps-2 dropdown-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Stack direction="row" spacing={2} className='nav1-profile-stack'>
                                        {item.navProfileIconText}
                                    </Stack>
                                </Link>
                                <Link className="dropdown-item nav1-dropdown-name-link" >
                                    {item.navProfileUserName} <br /> 
                                </Link>
                            </li>
                            <hr className='m-0' />
                            <li className='mt-3'>
                                <Link className="dropdown-item nav1-dropdown-link1">{item.navProfileUserProfile}</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav1-dropdown-link1">{item.navProfileContactUs}</Link>
                            </li>
                            <li>
                                <Link to={item.navProfileOrdersLink} className="dropdown-item nav1-dropdown-link1">{item.navProfileOrders}</Link>
                            </li>
                            <li>                        
                                <Link className="dropdown-item nav1-dropdown-link1">{item.navProfileFaq}</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav1-dropdown-link1">{item.navProfileAboutUs}</Link>
                            </li>
                            <li>
                                <Link to='' className="dropdown-item nav1-dropdown-link1">{item.navProfileLogin}</Link>
                            </li>
                        </ul>
                    )
                })
                    
            }
        </div>

    );
}
