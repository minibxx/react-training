import React from 'react'
import {DataContext} from '../MyContext';
import {useContext} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

type Props = {}

const List = (props: Props) => {
    const {data,setData} = useContext(DataContext);

    console.log(data)

    return (
        <article>
            <header>
                <div>Contact Application</div>
                <div className='blue'>
                    <Link to='/list'>리스트</Link>
                    <div className='slash'>/</div>
                    <Link to='/regist'>신규등록</Link>
                </div>
            </header>
            <div className='padding'>
                <div className='new-friend'>전화번호가 저장된 연락처 {data.length}개</div>
                        {
                            data.map((d:any)=>(
                                <div className='row contact'>
                                    <div className='row'>
                                        <div className='firstName'>{d.name}</div>
                                        <div>{d.phone}</div>
                                    </div>
                                    <img className='phone-img' src="./phone2.png"/>
                                </div>  
                            ))
                        }
            </div>
        </article>
    )
}

export default List