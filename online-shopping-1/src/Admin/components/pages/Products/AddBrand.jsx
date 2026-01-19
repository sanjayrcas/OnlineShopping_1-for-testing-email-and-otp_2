import React from 'react';
import './AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function AddBrand() {
    return (
        <div className='addBrand-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - Add Brand
                </title>
            </Helmet>
            <div className="addBrand-container pt-2">
                <p className="addBrand-heading fw-bold py-2 ps-4">Add Brand</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4">
                <form className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="form-label fw-semibold">Brand Name</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="form-label fw-semibold">Brand Icon</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="formFile" className="form-label fw-semibold">Brand Logo (use small logo .png file)</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label fw-semibold">Select Category</label>
                        <select id="inputState" className="form-select">
                            <option selected>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                            <option>Item 4</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary fw-semibold px-5">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
