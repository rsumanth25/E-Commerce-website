import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home'; 
import CartPage from './pages/CartPage';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetails from './pages/ProductDetails';
import './App.css';

export default function App() {
  const [view, setView] = useState('home'); // Controls page toggle
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith('/admin');

  return (
    <div className="app">
       {!isAdminPage && <Navbar />}
       <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="/product/:id" element={<ProductDetails />}
/>
          
        </Routes>
      

      </div>
      {!isAdminPage && <Footer />}
    </div>
  );
}
    

     
