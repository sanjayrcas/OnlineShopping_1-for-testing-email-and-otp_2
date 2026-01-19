import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarAccordion() {

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-0">
                <h2 className="accordion-header text-white ">
                    <button className="accordion-button admin-side-accordion-btn ps-4 d-flex align-items-center text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <i className="bi bi-shop sidebar-items-icon text-white"></i>
                        <p className='m-0 ms-3'>Product</p>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <Link to={'/addAllProducts'} className='text-decoration-none text-black'><p>All Products</p></Link>
                        <Link to={'/addProduct'} className='text-decoration-none text-black'><p>Add Products</p></Link>
                        <Link to={'/createCategory'} className='text-decoration-none text-black'><p>Create Category</p></Link>
                        <Link to={'/addBrand'} className='text-decoration-none text-black'><p>Add Brand</p></Link>
                        <Link to={'/offerProducts'} className='text-decoration-none text-black'><p>Offer Products</p></Link>
                     </div>
                </div>
            </div>
            <div className="accordion-item border-0">
                <h2 className="accordion-header text-white">
                    <button className="accordion-button admin-side-accordion-btn ps-4 d-flex align-items-center text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <i className="bi bi-card-heading sidebar-items-icon text-white"></i>
                        <p className='m-0 ms-3'>Blog</p>
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <Link to={'/blogs'} className='text-decoration-none text-black'><p>Blogs</p></Link>
                        <Link to={'/addBlogs'} className='text-decoration-none text-black'><p>Add Blog</p></Link>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header text-white">
                    <button className="accordion-button admin-side-accordion-btn ps-4 d-flex align-items-center text-white  text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <i className="bi bi-people sidebar-items-icon text-white"></i>
                        <p className='m-0 ms-3'>Team</p>
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <Link to={'/team'} className='text-decoration-none text-black'><p>All Members</p></Link>
                        <Link to={'team'} className='text-decoration-none text-black'><p>Add Members</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
