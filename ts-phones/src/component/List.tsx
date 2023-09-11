import React from 'react'

type Props = {}

const List = (props: Props) => {
  return (
    <article>
        <header>
            <div>Contact Application</div>
            <div className='blue'>리스트 / 신규등록</div>
            <div>전화번호가 저장된 연락처 100개</div>
        </header>
        <div className='padding'>
            <div className='row contact'>
                <div className='row'>
                    <div className='firstName' >홍</div>
                    <div>이름</div>
                </div>
                <img src="./phone2.png"/>
            </div>
        </div>
    </article>
  )
}

export default List