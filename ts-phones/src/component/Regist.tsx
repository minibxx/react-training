import React from 'react'

type Props = {}

const Regist = (props: Props) => {
  return (
    <article>
        <header>
            <div>Contact Application</div>
            <div className='blue'>리스트 / 신규등록</div>
        </header>
        <div className='padding'>
        <div>
            <div className='new-friend'>새로운 친구를 등록해주세요!</div>
            <form>
                <input placeholder='이름'></input>
                <input placeholder='010-1234-5678'></input>
                <button>저장</button>
            </form>
        </div>
        </div>
    </article>
  )
}

export default Regist