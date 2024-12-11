import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../UserPanel/pages/homepage/HomePage'
import Cart from '../UserPanel/components/cart/Cart'
import Navigation from '../UserPanel/components/navigation/Navigation'
import Footer from '../UserPanel/components/footer/Footer'
import ProductsDisplay from '../UserPanel/components/product/ProductsDisplay'
import ProductDetails from '../UserPanel/components/product/ProductDetails'
import Checkout from '../UserPanel/components/checkout/Checkout'
import Order from '../UserPanel/components/order/Order'
import OrderDetails from '../UserPanel/components/order/OrderDetails'
import Login from '../UserPanel/components/loginsignup/Login'
const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation />
        </div>
      <Routes>
        <Route path='/handloom_products' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<ProductsDisplay/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
       
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
