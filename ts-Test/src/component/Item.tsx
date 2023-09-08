import React,{ useRef } from 'react'
import { ts_sportsObj } from '../Types'

type Props = {
  item:ts_sportsObj
}

const Item = ({item}: Props) => {
  const ele = useRef<HTMLLIElement | null>(null); 
  // 타입 지정해야 에러가 안나는데 지금은 null 했는데도 동작하네여

  const view = (id:number)=>{
    let str = `<div>${id}</div>`;
    
    if(ele.current){
      ele.current.innerHTML = str;
      ele.current.style.cssText = 'color:red; font-size:16px';
  }
  }
  return (
    <>
      <li ref={ele} onClick={()=>{view(item.id)}}>
        { item.title }
      </li>
    </>
  )
}

export default Item