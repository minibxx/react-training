import React,{useContext} from 'react';
import {DataContext} from '../MyContext';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

type Props = {}

const Regist = (props: Props) => {
    const {data, setData} = useContext(DataContext);

    let insert = (e:React.BaseSyntheticEvent)=>{  
      e.preventDefault(); 
      let v = e.target;
      if (v.name.value ==''){
        alert('이름을 입력하세요!')
      }else{
          let d = {
              name:v.name.value, 
              phone:v.phone.value
          }
          setData([...data,d]);
          console.log(d)
      }
    }
    
    return (
        <article>
            <header>
                <div>Contact Application</div>
                <div className='blue row'>
                <Link to='/list'>리스트</Link>
                <div className='slash'> / </div>
                <Link to='/regist'>신규등록</Link>
                </div>
            </header>
            <div className='padding'>
            <div>
                <div className='new-friend'>새로운 친구를 등록해주세요!</div>
                <form onSubmit={insert}>
                    <input type='text' name='name' placeholder='이름'></input>
                    <input type='number' name='phone' placeholder='010-1234-5678'></input>
                    <input className='center' type='submit' value="저장"></input>
                </form>
            </div>
            </div>
        </article>
    )
}

export default Regist