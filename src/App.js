import logo from "./logo.svg";
import Navigation from "./UserPanel/components/navigation/Navigation";
import HomePage from "./UserPanel/pages/homepage/HomePage";
import ProductsDisplay from "./UserPanel/components/product/ProductsDisplay";
import Footer from "./UserPanel/components/footer/Footer";
import ProductDetails from "./UserPanel/components/product/ProductDetails";
import Cart from "./UserPanel/components/cart/Cart";
import Checkout from "./UserPanel/components/checkout/Checkout";
import Order from "./UserPanel/components/order/Order";
import OrderDetails from "./UserPanel/components/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
import Login from "./UserPanel/components/loginsignup/Login";
import Signup from "./UserPanel/components/loginsignup/Signup";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
