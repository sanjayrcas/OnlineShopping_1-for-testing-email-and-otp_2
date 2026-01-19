import React from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Login2 from './components/pages/Login Page/Login2.jsx';
import Signup from './components/pages/Signup Page/Signup.jsx';
// user page.
import Navbar1 from './components/layouts/Navbar1/Navbar1.jsx';
import Navbar2 from './components/layouts/Navbar2/Navbar2.jsx';
import Products from './components/layouts/Products/Products';
import Category from './components/layouts/Category/Category.jsx';
import Carousel from './components/layouts/Carousel/Carousel.jsx';
import SingleProductView from './components/pages/Product View Page/SingleProductView';
import CartPage from './components/pages/Cart Page/CartPage';
import Wishlist from './components/pages/Wishlist Page/Wishlist.jsx';
import Orders from './components/pages/Orders/Orders.jsx';
import ShowAllProducts from './components/pages/Product View Page/ShowAllProducts.jsx';
import Footer from './components/layouts/Footer/Footer.jsx';
// admin-panel.
import Navbar from './Admin/components/layouts/Navbar/Navbar';
import AddProduct from './Admin/components/pages/Products/AddProduct';
import AddAllProducts from './Admin/components/pages/Products/AddAllProducts';
import UpdateProduct from './Admin/components/pages/Products/UpdateProduct';
import CreateCategory from './Admin/components/pages/Products/CreateCategory.jsx';
import AddBrand from './Admin/components/pages/Products/AddBrand.jsx';
import OfferProducts from './Admin/components/pages/Products/OfferProducts.jsx';
import Blogs from './Admin/components/pages/Blogs/Blogs.jsx';
import UpdateBlogs from './Admin/components/pages/Blogs/UpdateBlogs.jsx';
import AddBlogs from './Admin/components/pages/Blogs/AddBlogs.jsx';
import Team from './Admin/components/pages/Team/Team.jsx';
import Profile from './Admin/components/pages/Profile/Profile.jsx';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                {/* admin-panel */}
                    {/* <Navbar/> */}
                <Routes>
                    <Route path='/user-dashboard' element={
                        <>
                            <Navbar1/>
                            <Navbar2/>
                            <Carousel/>
                            <Category/>
                            <Products/>
                            <Footer/>
                        </>
                    } />
                    <Route path='/' element={<Login2/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/SingleProductView/:id' element={<SingleProductView/>} />
                    <Route path='/CartPage' element={<CartPage/>} />
                    <Route path='/Wishlist' element={<Wishlist/>} />
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/showAllProducts' element={<ShowAllProducts/>} />
                    {/* admin-panel */}
                    <Route path='/admin-dashboard' element={<Navbar/>} />
                    <Route path='/addProduct' element={<AddProduct/>} />
                    <Route path='/addAllProducts' element={<AddAllProducts/>} />
                    <Route path='/updateProduct/:id' element={<UpdateProduct/>} />
                    <Route path='/createCategory' element={<CreateCategory/>} />
                    <Route path='/addBrand' element={<AddBrand/>} />
                    <Route path='/offerProducts' element={<OfferProducts/>} />
                    <Route path='/blogs' element={<Blogs/>} />
                    <Route path='/updateBlogs/:id' element={<UpdateBlogs/>} />
                    <Route path='/addBlogs' element={<AddBlogs/>} />
                    <Route path='/team' element={<Team/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
