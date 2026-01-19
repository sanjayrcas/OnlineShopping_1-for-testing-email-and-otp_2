import React from 'react';
import './AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function OfferProducts() {
    return (
        <div className='offerProducts-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - Offer Products
                </title>
            </Helmet>
            <div className="offerProducts-container pt-2">
                <p className="offerProducts-heading fw-bold py-2 ps-4">Offer Products</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4 text-center">
                <h3 className="text-danger">🚧 This page is currently under maintenance.</h3>
                <p>Please check back later for updates.</p>
            </div>
        </div>
    )
}
