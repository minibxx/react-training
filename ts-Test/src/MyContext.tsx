import {ReactNode, createContext, useState} from 'react';
import {ts_sports} from './Types';
import sports from './data.json';

// export const TestContext = createContext<ts_sports | null>(null);
// value={data} 은 createContext 자리에 들어간다
// 자식 컴포넌트들이 나중에 가져다 쓸 수 있도록 export
// 작업의 편의를 위해서 아래처럼 any로 바꽈줍니다

export const TestContext = createContext<any>(null);

type Props = { children : React.ReactNode}

const MyContext = ({children}: Props) => {
  const [data, setData] = useState(sports);
  
  return (
    <TestContext.Provider value={{data}}>
      {children}
    </TestContext.Provider>
  )
}

export default MyContext
// MyComponent가 부모 개념임
