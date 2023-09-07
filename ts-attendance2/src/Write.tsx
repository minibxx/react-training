import React,{ useContext } from 'react'
import { MyContext } from './Context';

function Write() {
  const {data, setData} = useContext(MyContext);

  let insert = (e:any)=>{  
    e.preventDefault(); 
    let v = e.target;

    if(data.length > 9){
      return false;
    }

    if(v.name.value != ''){
      let d = {
          name:v.name.value,
          id:Date.now()
      }
      setData([...data,d]);
    }
    e.target.name.value = '';
  }
  return (
    <>
        <div className="write">
            <div>참여자 등록</div>
        <form onSubmit={insert}>
            <input type="text" name="name"/>
            <input className="submit" type="submit" value="저장"/>            
        </form>
        </div>
    </>
      
  )
}


export default Write