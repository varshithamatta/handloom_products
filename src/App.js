import logo from "./logo.svg";
import Navigation from "./UserPanel/components/navigation/Navigation";
import HomePage from "./UserPanel/pages/homepage/HomePage";
import ProductsDisplay from "./UserPanel/components/product/ProductsDisplay";
import Footer from "./UserPanel/components/footer/Footer";
import ProductDetails from "./UserPanel/components/product/ProductDetails";
import Cart from "./UserPanel/components/cart/Cart";
import Checkout from "./UserPanel/components/checkout/Checkout";
import Order from "./UserPanel/components/order/Order";


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage/> */}
      {/* <ProductsDisplay/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      <Order/>
      <Footer />
    </div>
  );
}

export default App;
