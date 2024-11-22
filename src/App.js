import logo from './logo.svg';
import './App.css';
import Navigation from './UserPanel/components/navigation/Navigation';
import HomePage from './UserPanel/pages/homepage/HomePage';
import ProductsDisplay from './UserPanel/components/product/ProductsDisplay';
import Footer from './UserPanel/components/footer/Footer';
import ProductDetails from './UserPanel/components/product/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <HomePage/> */}
      {/* <ProductsDisplay/> */}
      <ProductDetails/>
      <Footer/>
    </div>
  );
}

export default App;
