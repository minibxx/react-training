import React from 'react'
import List from './List';
import Regist from './Regist';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

type Props = {}

const Main = (props: Props) => {
  return (
    <article>
        <div className='main'>
            <div className='Main-title'>Contact<br/> Application</div>
            <div><img className="phone-img" src="./phone1.png"/></div>
            <div>
                <Link className="Main-bt" to='/list'>리스트</Link>
                <Link className="Main-bt" to='/regist'>신규등록</Link>
            </div>
        </div>
    </article>
  )
}

export default Main