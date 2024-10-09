import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Placeorder from './Pages/Placeorder'
import Orders from './Pages/Orders'

const App = () => {
  return (
    <div className='  px-4 sm:px-6    md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />  
        <Navbar />
        <Searchbar />
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/collection' element = {<Collection />} />
            <Route path='/about' element ={<About />} />
            <Route path='/contact' element ={<Contact />} />
            <Route path='/product/:productId' element ={<Product />} />
            <Route path='/product' element ={<Product />} />
            <Route path='/cart' element ={<Cart/>} />
            <Route path='/login' element ={<Login/>} />
            <Route path='/placeorder' element ={<Placeorder/>} />
            <Route path='/orders' element ={<Orders/>} />
        </Routes>
        <Footer / >
    </div>
  )
}

export default App