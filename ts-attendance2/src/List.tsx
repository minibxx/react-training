import React,{useContext} from 'react'
import {MyContext} from './Context';

function List() {
    const {data,dispatch} = useContext(MyContext);
    
    const del = (code:any)=>{
      let d = data.filter((obj:any)=>(obj.id != code));
      dispatch({type:'del', d});
    }

    return (
      <>
      <div className='count'>참여인원 {data.length}명</div>
      
      <ul>
          {
            data.map((item:any,i:any)=>( 
              <>
                <li key={item.id}>
                  <button className="minus" onClick={()=>{del(item.id)}}>-</button>
                  {i+1}. {item.name}
                </li>
              </>
            ))
          }
      </ul>
      </>
    )
}

export default List