import React, { createContext, useState, useReducer } from 'react'
export const MyContext = createContext<any>(null);

const Context = ({ children }:{ children: React.ReactNode }) : JSX.Element => {

  const reducer = (state:any, action:any)=>{
    switch(action.type){
      case 'add' : return [...state,action.d];
      case 'del' : return [...action.d];
    }
  }

  const [data,dispatch] = useReducer(reducer,[]);
    return (
      <MyContext.Provider value={{data,dispatch}}>
          {children}
      </MyContext.Provider>
    )
  }

  export default Context
  //DataContext랑 MyContext (2개) 내보내기, 둘 다 쓸 수 있음