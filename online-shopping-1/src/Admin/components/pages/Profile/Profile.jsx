import './Profile.css';
import { Helmet } from 'react-helmet-async';
import ProfileImg from './image/Demo.jpg';
import { Link } from 'react-router-dom';
import { Cake, CreditCard, EnvelopeSimple, Phone } from 'phosphor-react';
import { AddressBookTabs } from '@phosphor-icons/react';

export default function Profile() {

    return (
        <div className='profile-main pb-3'>
            <Helmet>
                <title>
                    Online Shopping - Admin Profile
                </title>
            </Helmet>
            <div className="profile-container">
                <div className="profile-admin-container">
                    <p className="profile-heading fw-bold ps-3 py-3">Admin Profile</p>
                </div>
                <div className="row mx-3">
                    <div className="col-lg-4">
                        {/* profile */}
                        <div className="card profile-card bg-white py-3 rounded-3">
                            <div className="edit-profile-container d-flex justify-content-between align-items-center pe-2">
                                <p className='m-0 ps-3 fw-bold'>Profile</p>
                                <p className="edit-profile m-0">
                                    <Link className='edit-profile-Link text-decoration-none fw-semibold bg-warning py-1 px-2 rounded-1 ' style={{color: 'rgb(46, 48, 51)'}} >Edit Profile</Link>
                                </p>
                            </div>
                            <div className="card-img-container d-flex justify-content-center">
                                <Link>
                                    <img src={ProfileImg} className="card-img-top profile-img rounded-circle border p-1" alt="Admin profile" />
                                </Link>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text admin-id mb-1">Admin ID : PXL-0001</p>
                                <h5 className="card-title">Sanjay G</h5>
                                <p className="card-text admin-place">India, Tamil Nadu</p>
                            </div>
                            <p className="profile-description mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ab! Minus quas nam voluptatem eius.</p>
                            <ul className="list-group list-group-flush border-0">
                                <li className="list-group-item profile-contact-details border-0 mx-4 ps-0">
                                    <Phone className='me-2 profile-contact-icons'/>
                                    123-456-7890
                                </li>
                                <li className="list-group-item profile-contact-details border-0 mx-4 ps-0">
                                    <EnvelopeSimple className='me-2 profile-contact-icons'/>
                                    Sanjay123@gmail.com
                                </li>
                                <li className="list-group-item profile-contact-details border-0 mx-4 ps-0">
                                    <Cake className='me-2 profile-contact-icons'/>
                                    27/10/2002
                                </li>
                                <li className="list-group-item profile-contact-details border-0 mx-4 ps-0">
                                    <AddressBookTabs className='me-2 profile-contact-icons'/>
                                    2734 West Fork Steet, Easton 02334.
                                </li>
                            </ul>
                        </div>
                        {/* payment method */}
                        <div className="card payment-card mt-3 pb-3">
                            <div className="edit-profile-container my-3 ps-3">
                                <p className='m-0 fw-bold'>Profile Method</p>
                            </div>
                            <div className="visa-card ps-3 pb-2 d-flex">
                                <CreditCard size={25}/>
                                <p className='m-0 ps-2'>Visa <span>*******</span>7548</p>
                            </div>
                            <div className="visa-card-details ps-3">
                                <p className='m-0'>Next billing charged $48</p>
                                <p className='m-0'>
                                    <i>Autopay on July 20, 2021</i><span><Link className='text-decoration-none'>Edit Payment Info</Link></span>
                                </p>
                                <button className='btn py-1 px-3 mt-3 btn-primary'>Add Payment Info</button>
                            </div>
                        </div>                    
                        {/* Notification Preferences */}
                        <div className="card notification-card mt-3 pb-3">
                            <div className="edit-profile-container my-3 ps-3">
                                <p className='m-0 fw-bold'>Notification Preferences</p>
                            </div>
                            <div className="visa-card ps-3 pb-2">
                                <p className='m-0 me-3'>Control all our newsletter and email related notifications to your email</p>
                            </div>
                            <div className="visa-card-details ps-3">
                                <p className='m-0'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                        <label className="form-check-label" htmlFor="switchCheckDefault">Activity Notifications</label>
                                    </div>
                                </p>
                                <p className='m-0'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                        <label className="form-check-label" htmlFor="switchCheckDefault">Comment Notifications</label>
                                    </div>
                                </p>
                                <p className='m-0'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                        <label className="form-check-label" htmlFor="switchCheckDefault">Email Preferences</label>
                                    </div>
                                </p>
                            </div>
                        </div>                    
                    </div>
                    <div className="col-lg-8">
                        {/* profile settings */}
                        <div className="profile-setting mt-3 mt-lg-0 bg-dange rounded-4">
                            <div className='profile-main-container border-0 rounded-3 bg-succes'>
                                <div className="input-main-container bg-white border rounded-3 pt-0 p-4">
                                    <div className="edit-profile-container my-3">
                                        <p className='m-0 fw-bold'>Profile Settings</p>
                                    </div>
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label fw-semibold">User Name</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label fw-semibold">Password</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputEmail4" className="form-label fw-semibold">Company Name</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputEmail4" className="form-label fw-semibold">Contact Person</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputEmail4" className="form-label fw-semibold">Mobile Number</label>
                                            <input type="number" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Address</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="emailInput" className="form-label fw-semibold">Email</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                <input type="email" className="form-control" id="emailInput" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="basic-url" className="form-label fw-semibold">Website Url</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon3">https://</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputState" className="form-label fw-semibold">Country</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>--Select Country--</option>
                                                <option>Item 2</option>
                                                <option>Item 3</option>
                                                <option>Item 4</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputState" className="form-label fw-semibold">State</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>--Select State--</option>
                                                <option>Item 2</option>
                                                <option>Item 3</option>
                                                <option>Item 4</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputCity" className="form-label fw-semibold">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="col-md-2">
                                            <label htmlFor="inputPostalCode" className="form-label fw-semibold">Postal Code</label>
                                            <input type="text" className="form-control" id="inputPostalCode" />
                                        </div>
                                        <div className="col-12 pb-1">
                                            <button type="button" className="btn btn-primary fw-semibold px-5">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                        {/* Authentication Details */}
                        <div className="card authentication-card mt-3 pb-3">
                            <div className="edit-profile-container d-flex justify-content-between align-items-center mt-3 pe-2">
                                <p className='m-0 ps-3 fw-bold'>Authentication Details</p>
                                <p className="edit-profile m-0">
                                    <Link className='edit-profile-Link text-decoration-none fw-semibold bg-warning py-1 px-2 rounded-1 ' style={{color: 'rgb(46, 48, 51)'}} >Edit Profile</Link>
                                </p>
                            </div>
                            <div className="authentication-details-container mt-3 ps-3">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="auth-user-details">
                                            <p className="auth-user-key fw-semibold">user name:</p>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="auth-user-details">
                                            <p className="auth-user-value">sanjay</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="auth-user-details">
                                            <p className="auth-user-key fw-semibold">Login Password:</p>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="auth-user-details">
                                            <p className="auth-user-value">Abc<span>******</span></p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="auth-user-details">
                                            <p className="auth-user-key fw-semibold">Last Login:</p>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="auth-user-details">
                                            <p className="auth-user-value">128.456.89(Apple)Safari</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="auth-user-details">
                                            <p className="auth-user-key fw-semibold">Last Password Change:</p>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="auth-user-details">
                                            <p className="auth-user-value">3 Month Ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
