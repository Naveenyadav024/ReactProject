import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import Snacks from './Snacks';
import Drinks from './Drinks';
import SignUp from './SignUp';
import Login from './Login';
import Carts from './Carts';
import Orders from './Orders';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = (cartItems || []).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* 🔶 Header */}
      <div className="heade container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-3 ps-5">
            <img src="/Images/titleimage.jpeg" alt="Logo" height="70px" />
          </div>
          <div className="col-sm-6 ps-5">
            <h2 className="text-warning">🧑‍🍳 𝓣𝓪𝓼𝓽𝓔 𝓞𝓕 𝓗𝓸𝓶𝓮</h2>
            <p className="ps-5">We provide home food</p>
          </div>
          <div className="col-md-3">
            <div className="input-group">
              <input type="search" className="form-control" placeholder="Search 🔍" />
              <button className="btn btn-warning" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔶 Navigation */}
      <nav className="nav container-fluid d-flex justify-content-around p-2 text-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🏠 Home</NavLink>
        <NavLink to="/vegitems" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🥦 VegItems</NavLink>
        <NavLink to="/nonvegitems" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🍗 NonVegItems</NavLink>
        <NavLink to="/snacks" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🍿 Snacks</NavLink>
        <NavLink to="/drinks" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🥛 Drinks</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🛒 Cart ({cartCount})</NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📦 Orders</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>ℹ️ About</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📞 Contact Us</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📝 SignUp</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🔑 Login</NavLink>
      </nav>

      {/* 🔽 Routes */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vegitems" element={<VegItems />} />
          <Route path="/nonvegitems" element={<NonVegItems />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
