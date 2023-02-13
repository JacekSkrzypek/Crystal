import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Products from './pages/Products';
import SelectedProduct from './pages/SelectedProduct';
import Wishlist from './pages/Wishlist';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className='page-container'>
    <div className='content-wrap'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/products2/1' element={<Products />} />
        <Route path='/products/:id' element={<SelectedProduct />} />
      </Routes>
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
