import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import MyContext from './MyContext';
import Write from './component/Write';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to ='/'>Home</Link>
        <Link to ='/Write'>Write</Link>
      </header>
      <main>
        <MyContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write/>} />
          </Routes>
        </MyContext>
      </main>
    </BrowserRouter>
  );
}

export default App;
