import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Home';
import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import Snacks from './Snacks';
import Drinks from './Drinks';
import Carts from './Carts';
import Orders from './Orders';
import About from './About';
import ContactUs from './ContactUs';
import Account from './Account';
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
      {/* Header */}
      <div className="heade container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-3 ps-5">
            <img src="/Images/titleimage.jpeg" alt="Logo" height="70px" />
          </div>
          <div className="col-sm-6 ps-5">
            <h2 className="text-warning">🧑‍🍳 Taste Of Home</h2>
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

      {/* Navigation with toggle for mobile */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Toggler button visible on mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🏠 Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/vegitems" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🥦 VegItems</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nonvegitems" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🍗 NonVegItems</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/snacks" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🍿 Snacks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drinks" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🥛 Drinks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>🛒 Cart ({cartCount})</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📦 Orders</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>ℹ️ About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📞 Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/account" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>📝 Account</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
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
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
