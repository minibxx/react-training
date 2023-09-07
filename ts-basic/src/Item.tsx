import React from 'react'
import { ty_data } from './types'

type tyProps = {
    data: ty_data
};

//함수명 앞에 <>를 활용해서 타입 지정 가능
const Item:React.FC<tyProps> = ({data}):JSX.Element => {
    console.log (data);
    return (
    <div>
        {
            data.map((obj)=>(
                <p key={obj.id}> {obj.item[0].tit} </p>
            ))
        }
    </div>
  )
}

export default Item;