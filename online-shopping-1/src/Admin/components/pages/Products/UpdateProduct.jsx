import React from 'react';
import './AddProduct.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UpdateProduct() {

    const {id} = useParams();
    const [updataProductData, setUpdateProductData] = useState({
        productsImg : "", productsName : "", productsCategory : "", productsOriginalPrice : "", productsDescription : "", productsStatus : "", productQuantity : "",
    });

    // const API_BASE_URL = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        // fetch(`https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/getProductById/${id}`)
        // fetch(`${API_BASE_URL}/api/products/getProductById/${id}`)
        fetch(`http://localhost:5000/api/products/getProductById/${id}`)
        .then((res)=> res.json())
        .then((data)=> setUpdateProductData(data))
    }, [API_BASE_URL, id]);

    const handleUpdate=(event)=>{
        event.preventDefault();
        const form = event.target;
        const productsImg = form.productsImg.value;
        const productsName = form.productsName.value;
        const productsCategory = form.productsCategory.value;
        const productsOriginalPrice = form.productsOriginalPrice.value;
        const productsDescription = form.productsDescription.value;
        const productsStatus = form.productsStatus.value;
        const productQuantity = form.productQuantity.value;

        const formDatas = {
            productsImg, productsName, productsCategory, productsOriginalPrice, productsDescription, productsStatus, productQuantity
        };

        // fetch(`https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/updateProduct/${id}`,{
        // fetch(`${API_BASE_URL}/api/products/updateProduct/${id}`,{
        fetch(`http://localhost:5000/api/products/updateProduct/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-type':'Application/json'
            },
            body: JSON.stringify(formDatas)
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert('product updated successfully')
        })
        window.location.href = '/addAllProducts'

    };


    return (
        <div className="updateProduct-main">
            <div className="updateProduct-container pt-2">
                <p className="updateProduct-heading fw-bold py-2 ps-4">Update Product</p>
            </div>
            <div className="input-main-container mt-4 mx-3 bg-white border rounded-3 p-4">
                <form onSubmit={handleUpdate} encType="multipart/form-data" className="row g-3">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="productsImg" className="form-label fw-semibold">Product Image</label>
                        <input type="text" id="productsImg" className="form-control" name="productsImg" defaultValue={updataProductData.productsImg} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsName" className="form-label fw-semibold">Product Name</label>
                        <input type="text" id="productsName" className="form-control" name="productsName" defaultValue={updataProductData.productsName}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsCategory" className="form-label fw-semibold">Product Category</label>
                        <select id="productsCategory" className="form-select" name="productsCategory" defaultValue={updataProductData.productsCategory} >
                            <option value="">--Select Category--</option>
                            <option value="All">All</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Pants">Pants</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsOriginalPrice" className="form-label fw-semibold">Product Price</label>
                        <input type="number" id="productsOriginalPrice" className="form-control" name="productsOriginalPrice" defaultValue={updataProductData.productsOriginalPrice}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="productsDescription" className="form-label fw-semibold">Product Description</label>
                        <textarea className="form-control" id="productsDescription" name="productsDescription" defaultValue={updataProductData.productsDescription} rows={3} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productsStatus" className="form-label fw-semibold">Product Status</label>
                        <select id="productsStatus" className="form-select" name="productsStatus" defaultValue={updataProductData.productsStatus} >
                            <option value="">--Select Status--</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productQuantity" className="form-label fw-semibold">Quantity</label>
                        <input type="number" id="productQuantity" className="form-control" name="productQuantity" defaultValue={updataProductData.productQuantity}/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary fw-semibold px-5">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
