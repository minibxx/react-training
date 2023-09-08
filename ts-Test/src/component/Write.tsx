import React, { useContext, useRef, useState } from 'react'
import {TestContext} from '../MyContext'

// {category: '구기종목', msg: 'xcvxcv', id: '123456'}

type Props = {}

interface ts_msg{
  [key:string]: FormDataEntryValue 
}
const Write = (props: Props) => {

  const {data} = useContext(TestContext);
  const dataKey:string[] = Object.keys(data);
  const msgForm = useRef<HTMLFormElement|null>(null);
  const [community, setCommunity] = useState<ts_msg[]>([]);
  console.log(community);
  
  const insert = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    if(msgForm.current){
      let formdata = new FormData(msgForm.current);
      let idx:number = Date.now();
      formdata.append('id',idx.toString());

      let obj:ts_msg = Object.fromEntries(formdata);
      setCommunity([...community,obj]);
    }
  }
  return (
    <article>
      <h2>Write</h2>
      <div>
        <form className="column" onSubmit={insert} ref={msgForm}>
          <select name="category">
            {
              dataKey.map((obj:string, idx:number)=>(
              // obj:string(값), idx:number(인덱스) 순서가 중요한건가?
                <option key={idx}>{obj}</option>
              ))
            }
          </select>
          <textarea name="msg"></textarea>
          <input type="submit" value ="저장"/>
        </form>
      </div>
    </article>
  )
}

export default Write