import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import ContactUs from './components/contactus';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import Galary from './components/galary';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
                <Home />

    <BrowserRouter>
        <Header />
        <h1>Hi Welcome to React Js Application</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/galary" element={<Galary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
            </BrowserRouter>

      </div>
  );
}

export default App;
