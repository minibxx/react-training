import Context from './Context';
import './App.scss';
import { useState } from 'react';
import List from './List';
import Write from './Write';

const App:React.FC = ():JSX.Element =>{
  
  const [state,setState] = useState(false);
  const pop = ()=>{
    setState(!state);
  }
  return (
    <>
    <article>
      <button className="plus" onClick={()=> { setState((e) => !e);}}>+</button>
      <Context>
        <div className={state?'active':''}><Write/></div>
        <List/>
      </Context>
    </article>
    </>  
  );
}

export default App;