import React, { createContext, useState } from 'react'
export const DataContext = createContext<any>(null); //외부에서 사용 가능

const MyContext= ({children}: {children:React.ReactNode}):JSX.Element => {
  const [data,setData] =useState([]);
    return (
      <DataContext.Provider value={{data,setData}}>
          {children}
      </DataContext.Provider>
    )
  }
  
  export default MyContext