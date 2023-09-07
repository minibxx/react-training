import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Item from './Item';
import { ty_data } from './types'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './Game';

const App:React.FC=()=>{
  const [init,setInit] = useState<ty_data>(data)
  // ([]) 안에 문자나 숫자 냅다 넣으면 오류라는 것 같음!

  // const init:ty_data = data;
  return (
    <BrowserRouter>
      <Item data={init}/>
      <Routes>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
