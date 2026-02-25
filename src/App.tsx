import React from "react";
import { Routes, Route } from "react-router-dom";
import Frame25 from './pages/Frame 25';
import Stores from './pages/Stores';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Frame25 />} />
        <Route path="/frame-25" element={<Frame25 />} />
        <Route path="/stores" element={<Stores />} />
    </Routes>
  );
};

export default App;
