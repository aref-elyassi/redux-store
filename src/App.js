
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Banner from './assets/banner3.jpg'
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <>
      <div className='w-100'>

        <img src={Banner} alt='this is banner' className='w-100'  style={{ height: '120px', objectFit: 'cover' }} />
      </div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/cart" element={<ShopCart/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
