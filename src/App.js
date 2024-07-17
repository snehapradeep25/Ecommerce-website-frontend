import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Product from './pages/Product';
import My_account from './pages/My_account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Sell_Your_Own_Products from './pages/Sell_Your_Own_Products';
import Orders from './pages/Orders';
import Contact from './pages/Contact';





function App() {
  return (
    <div>
      <Navbar/>
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path='/My_account' element={<My_account/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        <Route path='/Sell_Your_Own_Products' element={<Sell_Your_Own_Products/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Orders' element={<Orders/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
       
      
     
    </div>
 
  );
}
export default App;

