import React from 'react';
import '../Products/AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function Team() {
    return (
        <div className='Team-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - All Members
                </title>
            </Helmet>
            <div className="Team-container pt-2">
                <p className="Team-heading fw-bold py-2 ps-4">All Members</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4 text-center">
                <h3 className="text-danger">🚧 This page is currently under maintenance.</h3>
                <p>Please check back later for updates.</p>
            </div>
        </div>
    )
}
