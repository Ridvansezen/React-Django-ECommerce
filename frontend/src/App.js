import './App.css';
import './my.css';
import './bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screen/HomeScreen';
import { Routes, Route, Link } from 'react-router-dom';
import AboutScreen from './screen/AboutScreen';
import Container from 'react-bootstrap/esm/Container';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';

function App() {
  return (
    <div>
        <Header></Header>
        <Container className='mt-50 mb-50 justify-content-center'>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
        </Routes>
        <Footer></Footer>
        </Container>  
    </div>
  );
}

export default App;
