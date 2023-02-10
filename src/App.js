import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Products from './pages/Products';
import SelectedProduct from './pages/SelectedProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Products />} />
        <Route path='/selectedProduct' element={<SelectedProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
