import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
        <div className='app'>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
