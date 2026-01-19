import React from 'react';
import { Link}  from 'react-router-dom';
import './Order.css';
// import { Helmet } from 'react-helmet-async';
import { Circle, MagnifyingGlass, Star } from 'phosphor-react';
import orderImg1 from '../../layouts/Products/Products  Details/ProductsDetails';

export default function Orders() {
    return (
        <div>
            {/* <Helmet> */}
                {/* <title> */}
                    {/* Online Shopping - My Orders */}
                {/* </title> */}
            {/* </Helmet> */}
            <h5 className='position-sticky top-0 z-1 text-white ps-3 py-3' style={{ backgroundColor: '#111827' }}>My Orders</h5>
            {/* Breadcrumb Navigation start */}
            <nav className="breadCrumb-sticky" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none"  style={{color: '#838383'}}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{color: '#838383'}} aria-current="page">My Orders</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            <div className="order-container">
                <div className="row m-0">
                    <div className="col-2">
                        <div className="order-filter-container border border-secondary rounded-2 py-3 bg-white">
                            <h5 className='py-2 ps-3 fw-bold m-0'>Filter</h5>
                            <div className="order-status-container">
                                <p className='fw-semibold ps-3'>ORDER STATUS</p>
                                <ul>
                                    <li>
                                        <input id='onTheWay'  className='me-2' type="checkbox" />
                                        <label htmlFor="onTheWay">On The Way</label>
                                    </li>
                                    <li>
                                        <input id='Delivered'  className='me-2' type="checkbox" />
                                        <label htmlFor="Delivered">Delivered</label>
                                    </li>
                                    <li>
                                        <input id='Cancelled'  className='me-2' type="checkbox" />
                                        <label htmlFor="Cancelled">Cancelled</label>
                                    </li>
                                    <li>
                                        <input id='Returned'  className='me-2' type="checkbox" />
                                        <label htmlFor="Returned">Returned</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="order-time-container">
                                <p className='fw-semibold ps-3'>ORDER TIME</p>
                                <ul>
                                    <li>
                                        <input id='last30Days' className='me-2' type="checkbox" />
                                        <label htmlFor="last30Days">Last 30 days</label>
                                    </li>
                                    <li>
                                        <input id='2024'  className='me-2' type="checkbox" />
                                        <label htmlFor="2024">2024</label>
                                    </li>
                                    <li>
                                        <input id='2023'  className='me-2' type="checkbox" />
                                        <label htmlFor="2023">2023</label>
                                    </li>
                                    <li>
                                        <input id='2022'  className='me-2' type="checkbox" />
                                        <label htmlFor="2022">2022</label>
                                    </li>
                                    <li>
                                        <input id='2021'  className='me-2' type="checkbox" />
                                        <label htmlFor="2021">2021</label>
                                    </li>
                                    <li>
                                        <input id='older'  className='me-2' type="checkbox" />
                                        <label htmlFor="older">Older</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="order-view-container">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control border border-secondary" style={{borderColor: '#dbdbdb'}} placeholder="Search your order here" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                <button className="btn bg-primary text-white fw-semibold" type="button" id="button-addon2"><MagnifyingGlass className='me-1' weight="bold" size={20} />Search Orders</button>
                            </div>
                            <div className="order-list-container">
                                {
                                       
                                    orderImg1.map((item,index)=>{
                                        return(
                                            <div key={index} className="order-img-details bg-white p-3 d-flex flex-wrap justify-content-between border border-secondary rounded-2 mb-3">
                                                <img src={item.productsImg} style={{height: '150px', width:'150px'}} alt="Order img" />
                                                <div>
                                                    <p><Link className='text-decoration-none text-black'>{item.productsName}</Link></p>
                                                    <p><Link className='text-decoration-none text-secondary'>{item.productsDescription}</Link></p>
                                                </div>
                                                <div>
                                                    <p><Link className='text-decoration-none text-black'>₹{item.productsOffPrice}</Link></p>
                                                </div>
                                                <div>
                                                    <p><Link className='text-decoration-none text-black'><Circle className='me-1' size={20} color="#26a642" weight="fill" />Delivered on June 10, 2025</Link></p>
                                                    <p><Link className='text-decoration-none text-black'>Your item has been delivered</Link></p>
                                                    <p><Link className='text-decoration-none text-primary'><Star/> Rate & Review Product</Link></p>
                                                </div>
                                            </div>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
