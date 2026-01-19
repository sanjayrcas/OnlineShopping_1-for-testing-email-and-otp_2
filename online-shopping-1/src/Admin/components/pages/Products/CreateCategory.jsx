import React from 'react';
import './AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function CreateCategory() {
    return (
        <div className='addBlogs-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - Create Category
                </title>
            </Helmet>
            <div className="addBlogs-container pt-2">
                <p className="addBlogs-heading fw-bold py-2 ps-4">Create Category</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label fw-semibold">Create Name</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="formFile" className="form-label fw-semibold">Add Image</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary fw-semibold px-5">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
