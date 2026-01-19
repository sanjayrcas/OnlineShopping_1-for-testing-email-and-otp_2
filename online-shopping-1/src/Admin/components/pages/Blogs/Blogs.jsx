import React, { useState } from 'react';
import '../Products/AddProduct.css';
import { Helmet } from 'react-helmet-async';
import { MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 5;
    
        const tableData = [
            { id: 1, blogTitle: 'Things I Wish I Had Known About Angular When I Started New', AuthorName: 'Sanjay', AuthorEmail: 'sanjay123@gmail.com'},
            { id: 2, blogTitle: 'Things I Wish I Had Known About Angular When I Started New', AuthorName: 'rohan', AuthorEmail: 'rohan123@gmail.com'},
            { id: 3, blogTitle: 'Things I Wish I Had Known About Angular When I Started New', AuthorName: 'anas', AuthorEmail: 'anas123@gmail.com'},
            { id: 4, blogTitle: 'Things I Wish I Had Known About Angular When I Started New', AuthorName: 'dinesh', AuthorEmail: 'dinesh123@gmail.com'},
        ];
    
        // Calculate total pages
        const totalPages = Math.ceil(tableData.length / itemsPerPage);
    
        // Get current page data
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
    
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

    return (
        <div className='blog-main'>
            <Helmet>
                <title>
                    Online Shopping - Admin - Blog Page
                </title>
            </Helmet>
            <div className="blog-container pt-2">
                <p className="blog-heading fw-bold py-2 ps-4">Blog</p>
                <div className="blog-table-container mx-3 rounded-2">
                    <div className="blog-input-Container mb-4 text-end">
                        <MagnifyingGlass className='blog-searchIcon position-absolute z-1 ms-3' style={{margin: '8px 0px', fontSize: '20px'}} />
                        <input type="text" className='blog-input position-relative rounded-1 border border-black ps-5 py-1' style={{outline: 'none'}} placeholder='Search List'/>
                    </div>
                    <div className='overflow-x-auto'>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Blog Title</th>
                                    <th>Author Name</th>
                                    <th>Author Email</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentItems.map((item, index) => (
                                        <tr key={index + item.AuthorName}>
                                            <td>{indexOfFirstItem + index + 1}</td>
                                            <td>{item.blogTitle}</td>
                                            <td>{item.AuthorName}</td>
                                            <td>{item.AuthorEmail}</td>
                                            <td><Link to={'/updateBlogs'} className='btn-update text-decoration-none'>Update</Link></td>
                                            <td><button className='btn-delete'>Delete</button></td>
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
    )
}
