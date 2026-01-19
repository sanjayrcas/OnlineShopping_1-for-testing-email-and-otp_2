import React from 'react';
import '../Products/AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function UpdateBlogs() {
    return (
        <div>
            <Helmet>
                <title>
                    Online Shopping - Admin - Update Blog Page
                </title>
            </Helmet>
            <div className='updateProduct-main'>
                <div className="updateProduct-container pt-2">
                    <p className="updateProduct-heading fw-bold py-2 ps-4">Update Blog Post</p>
                </div>
                <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label fw-semibold">Blog Title</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="formFile" className="form-label fw-semibold">Blog Banner Image</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Blog Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn btn-primary fw-semibold px-5">Update Blog</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
