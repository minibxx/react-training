import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List from './component/List';
import Regist from './component/Regist';
import Main from './component/Main';
import MyContext from './MyContext';

function App() {
  return (
    <BrowserRouter>
      <MyContext>
        <Routes>
          <Route path="/" element={<Main/>}> </Route>
          <Route path="/list" element={<List/>}> </Route>
          <Route path="/regist" element={<Regist/>}> </Route>
        </Routes>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
