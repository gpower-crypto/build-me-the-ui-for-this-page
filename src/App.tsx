import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
