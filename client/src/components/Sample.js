import React from 'react';
import './App.css';
import Nav from "./sample/Nav";
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Footer from './sample/Footer';
import Signup from './sample/Signup';
import PrivateComponent from './sample/PrivateComponent';


export default function Sample() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<h1>Product Listing</h1>}/>
          <Route path='/add' element={<h1>Add Product</h1>}/>
          <Route path='/update' element={<h1>Update Product</h1>}/>
          <Route path='/logout' element={<h1>Logout</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  )
}


