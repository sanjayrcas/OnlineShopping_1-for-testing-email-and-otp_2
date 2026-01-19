import React, { useState } from 'react';
import './AddProduct.css';
import { Helmet } from 'react-helmet-async';
// import productDetails from './Products  Details/ProductsDetails';
import { MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AddAllProducts() {
    // get all products.
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(()=>{
        fetch('http://localhost:5000/api/products/getAllProducts')
        // fetch('https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/getAllProducts')
            .then((res)=> res.json())
            .then((data)=>{
                setProductData(data)
            })
        },[])

    // delete products by id.
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/api/products/deleteProduct/${id}`,{
        // fetch(`https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert('product was deleted successfully')
            setProductData(prevData => prevData.filter(item => item._id !== id))
        })
    }

    const totalPages = Math.ceil(productData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

return (
    <div className='addAllProducts-main'>
        <Helmet>
            <title>
                Online Shopping - Admin - All Product Page
            </title>
        </Helmet>
        <div className="addAllProducts-container pt-2">
            <p className="addAllProducts-heading fw-bold py-2 ps-4">All Product</p>
            <div className="addAllProducts-table-container mx-3 rounded-2">
                <div className="addAllProducts-input-Container mb-4 text-end">
                    <MagnifyingGlass className='addAllProducts-searchIcon z-1 position-absolute ms-3' style={{margin: '8px 0px', fontSize: '20px'}} />
                    <input type="text" className='addAllProducts-input position-relative rounded-1 border border-black ps-5 py-1' style={{outline: 'none'}} placeholder='Search List'/>
                </div>
                <div className='overflow-x-auto'>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Product Price</th>
                                <th>Offer Status</th>
                                {/* <th>Stock</th> */}
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentItems.map((product, i) => (
                                    <tr key={product._id}>
                                        <td>{indexOfFirstItem + i + 1}</td>
                                        <td>{product._id}</td>
                                        <td>
                                            <img src={product.productsImg} style={{width: '50px', height: '50px'}} alt="Product img" />
                                        </td>
                                        <td>{product.productsName}</td>
                                        <td>₹{product.productsOriginalPrice}</td>
                                        <td>{product.productsStatus}</td>
                                        {/* <td>{product.productStock}</td> */}
                                        <td><Link to={`/updateProduct/${product._id}`} className='btn-update text-decoration-none'>Update</Link></td>
                                        <td><button className='btn-delete' onClick={()=> handleDelete(product._id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Pagination */}
            <nav aria-label="Page navigation example" className='mt-3 me-4'>
                <ul className="pagination justify-content-end">
                    <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                    {
                        [...Array(totalPages)].map((_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 && 'active'}`}>
                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                            </li>
                        ))
                    }
                    <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);

}
