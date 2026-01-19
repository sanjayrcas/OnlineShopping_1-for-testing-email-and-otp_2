import './Footer.css';
import { Link } from 'react-router-dom';
import FooterLogo from './meesho - png.png';
import { FacebookLogo, Gift, Handbag, InstagramLogo, Question, Star, XLogo, YoutubeLogo } from '@phosphor-icons/react';
import FooterPaymentMethod from './Footer-payment-method_69e7ec.svg';

export default function Footer() {

    const footerData1 = [
        {aboutData: 'Contact Us'}, 
        {aboutData: 'About Us'},
        {aboutData: 'Careers'},
        {aboutData: 'Online Shopping Stories'},
        {aboutData: 'Corporate Information'},
        {groupCompaniesData: 'E-Shop-See'},
        {groupCompaniesData: 'Amazon'},
        {groupCompaniesData: 'Flipkart'},
        {groupCompaniesData: 'Meesho'},
        {groupCompaniesData: 'Myntra'},
        {helpData: 'Payments'},
        {helpData: 'Shipping'},
        {helpData: 'Cancellation & Returns'},
        {helpData: 'FAQ'},
        {consumerPolicyData: 'Cancellation & Returns'},
        {consumerPolicyData: 'Terms Of Use'},
        {consumerPolicyData: 'Security'},
        {consumerPolicyData: 'Privacy'},
        {consumerPolicyData: 'Sitemap'},
        {consumerPolicyData: 'Grievance Redressal'},
    ];
    const footerData2 = [
        {mailUsData: "Online Shopping Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India"},
        {mailUsData: ''},
        {registeredAddressData: "Online Shopping Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India"},
        {registeredCINData: 'CIN: JDJlJkKkJDS084308034'},
        {registeredTelephoneData : 'Telephone Number: 044-45614700 / 044-67415800'}
    ]

    return (
        <div className='mt-4' style={{backgroundColor: '#111827'}}>
            <div className="footer-main">
                <div className="footerLogo-container text-center">
                    <Link><img src={FooterLogo} alt="Online Shopping Logo" /></Link>
                </div>
                <div className="row m-0 py-5">
                    <div className="col-12 col-lg-6 bg-inf">
                        <div className='d-flex flex-lg-nowrap flex-wrap'>
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>ABOUT</p>
                                {
                                    footerData1.map((data, index)=>{
                                        return(
                                            <Link key={index} className='text-decoration-none' style={{color: '#B3B3B3'}}>
                                                <li className='footerList list-unstyled'>{data.aboutData}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>GROUP COMPANIES</p>
                                {
                                    footerData1.map((data, index)=>{
                                        return(
                                            <Link key={index} className='text-decoration-none' style={{color: '#B3B3B3'}}>
                                                <li className='footerList list-unstyled'>{data.groupCompaniesData}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>HELP</p>
                                {
                                    footerData1.map((data, index)=>{
                                        return(
                                            <Link key={index} className='text-decoration-none' style={{color: '#B3B3B3'}}>
                                                <li className='footerList list-unstyled'>{data.helpData}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>CONSUMER POLICY</p>
                                {
                                    footerData1.map((data, index)=>{
                                        return(
                                            <Link key={index} className='text-decoration-none' style={{color: '#B3B3B3'}}>
                                                <li className='footerList list-unstyled'>{data.consumerPolicyData}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 m-lg-0 bg-warnin">
                        <div className="d-flex flex-wrap">
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>Mail Us:</p>
                                {
                                    footerData2.map((data, index)=>{
                                        return(
                                            <li key={index} className='list-unstyled' style={{color: '#B3B3B3'}}>{data.mailUsData}</li>
                                        )
                                    })
                                }
                                <p className='text-white mt-3 fw-bold text-decoration-underline'>Social:</p>
                                <div className='socialIcons d-flex gap-3 align-items-center'>
                                    <Link className='text-decoration-none footerListSocial' style={{color: '#B3B3B3'}}><FacebookLogo size={30} /></Link>
                                    <Link className='text-decoration-none footerListSocial' style={{color: '#B3B3B3'}}><XLogo size={30} /></Link>
                                    <Link className='text-decoration-none footerListSocial' style={{color: '#B3B3B3'}}><YoutubeLogo size={30} /></Link>
                                    <Link className='text-decoration-none footerListSocial' style={{color: '#B3B3B3'}}><InstagramLogo size={30} /></Link>
                                </div>
                            </ul>
                            <ul>
                                <p className='text-white fw-bold text-decoration-underline'>Registered Office Address:</p>
                                {
                                    footerData2.map((data, index)=>{
                                        return(
                                            <div key={index}>
                                                    <li className='list-unstyled' style={{color: '#B3B3B3'}}>{data.registeredAddressData}</li>
                                                    <li className='list-unstyled' style={{color: '#B3B3B3'}}>{data.registeredCINData}</li>
                                                <Link className='text-decoration-none'>
                                                    <li className='list-unstyled'>{data.registeredTelephoneData}</li>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                <hr className='text-white' />
                <div className="footer-extra-contents mt-3 bg-inf">
                    <ul className='d-flex flex-wrap justify-content-evenly mb-0 align-items-center'>
                        <Link className='text-white text-decoration-none fw-semibold'>
                            <li className='list-unstyled'><Handbag className='me-1' size={20} />Become a Seller</li>
                        </Link>
                        <Link className='text-white text-decoration-none fw-semibold'>
                            <li className='list-unstyled'><Star  className='me-1' size={20} />Advertise</li>
                        </Link>
                        <Link className='text-white text-decoration-none fw-semibold'>
                            <li className='list-unstyled'><Gift className='me-1' size={20} />Gift Cards</li>
                        </Link>
                        <Link className='text-white text-decoration-none fw-semibold'>
                            <li className='list-unstyled'><Question className='me-1' size={20} />Help Center</li>
                        </Link>
                        <li className='list-unstyled fw-semibold  mt-2 mt-md-0 text-white'>© 2025 <Link className='text-decoration-none'>www.OnlineShopping.com</Link>. All rights reserved.</li>
                        <li className='list-unstyled mt-2 mt-xl-0'><img src={FooterPaymentMethod} alt="Footer Payment Method" /></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
