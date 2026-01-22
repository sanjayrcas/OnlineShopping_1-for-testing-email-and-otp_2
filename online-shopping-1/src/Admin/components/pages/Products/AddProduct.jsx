import React from 'react';
import './AddProduct.css';
import { Helmet } from 'react-helmet-async';

export default function AddProduct() {
    // const API_BASE_URL = process.env.REACT_APP_API_URL;

    const handleSubmit =  (event) =>{
        event.preventDefault();
        const form = event.target;

        const productsImg = form.productsImg.value;
        const productsName = form.productsName.value;
        const productsCategory = form.productsCategory.value;
        const productsOriginalPrice = form.productsOriginalPrice.value;
        const productsDescription = form.productsDescription.value;
        const productsStatus = form.productsStatus.value;
        const productQuantity = form.productQuantity.value;

        // if(productsImg === '' || productsName === '' || productsCategory === '' || productsOriginalPrice === '' || productsDescription === '' || productsStatus === '' || productQuantity === ''){
        //     alert("Fill all the Details")
        //     return
        // };  
        // or this.
        if (!productsImg || !productsName || !productsCategory || !productsOriginalPrice || !productsDescription || !productsStatus || !productQuantity) {
            alert("Fill all the details");
            return;
        } 

        const formDatas = {
            productsImg, productsName, productsCategory, productsOriginalPrice, productsDescription, productsStatus, productQuantity
        };

        // fetch('http://localhost:5000/addProduct', {
        // fetch('https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/addProduct', {
        // fetch(`${API_BASE_URL}/api/products/addProduct`, {
        fetch('http://localhost:5000/api/products/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formDatas)
        })
        .then((res)=> res.json())
        .then((data)=>{
            alert('product added successfully')
            form.reset()
        })
        .catch (error => {
            console.error(error);
            alert('Failed to add product');
        })
    };

    return (
        <div className='addProduct-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - Add Product
                </title>
            </Helmet>
            <div className="addProduct-container pt-2">
                <p className="addProduct-heading fw-bold py-2 ps-4">Add Product</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4">
                {/* <form onSubmit={handleSubmit} encType='multipart/form-data' className="row g-3"> */}
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="productsImg" className="form-label fw-semibold">Product Image URL</label>
                        <input type="text" id="productsImg" className="form-control" required name='productsImg'  />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsName" className="form-label fw-semibold">Product Name</label>
                        <input type="text" id="productsName" className="form-control" required name='productsName' />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsCategory" className="form-label fw-semibold">Product Category</label>
                        <select id="productsCategory" className="form-select" required name='productsCategory'  >
                            <option value=''>--Select Category--</option>
                            <option value="All">All</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Pants">Pants</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsOriginalPrice" className="form-label fw-semibold">Product Price</label>
                        <input type="number" id="productsOriginalPrice" className="form-control" required name='productsOriginalPrice'   />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="productsDescription" className="form-label fw-semibold">Product Description</label>
                        <textarea id="productsDescription" className="form-control" required name='productsDescription'  rows={3} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsStatus" className="form-label fw-semibold">Product Status</label>
                        <select id="productsStatus" className="form-select" required name='productsStatus'  >
                            <option value=''>--Select Status--</option>
                            <option value='In Stock'>In Stock</option>
                            <option value='Out of Stock'>Out of Stock</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productQuantity" className="form-label fw-semibold" >Quantity</label>
                        <input type="number" id="productQuantity" className="form-control" required name='productQuantity' />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary fw-semibold px-5">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}