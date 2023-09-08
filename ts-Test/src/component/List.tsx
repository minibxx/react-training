import React, {useContext} from 'react';
import { TestContext } from '../MyContext';
import {ts_sportsObj} from '../Types';
import Item from './Item';

type Props = {
    title:string
}

const List = ({title}:Props) => {
  const {data} = useContext(TestContext);
  // data는 json 내용 다 가지고 있는 객체임!

  return (
    <article>
        <h2>{title}</h2>
        <ul>
            {
              //data.json이 배열값을 가지고 있어서 map 가능
              data[title].map((obj:ts_sportsObj)=>(  
                  <Item key={obj.id} item={obj} />
              ))
           }
        </ul>
    </article>
  )
}

export default List