import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import OrderUI from './pages/OrderUI';
import Orders from './pages/Orders';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';

// <-- Import Profile

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUser(localStorage.getItem('user') || '');
  }, []);

  return (
    <Router>
     <Header search={search} setSearch={setSearch} user={user} setUser={setUser} cart={cart} />
      <Routes>
        <Route path="/" element={
          <Home search={search} cart={cart} setCart={setCart} />
        } />
        <Route path="/home" element={
          <Home search={search} cart={cart} setCart={setCart} />
        } />
        <Route path="/cart" element={
          <Cart cart={cart} setCart={setCart} />
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/order" element={
          <OrderUI cart={cart} setCart={setCart} orders={orders} setOrders={setOrders} />
        } />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;