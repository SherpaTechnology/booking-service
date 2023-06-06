import { createContext,useState } from "react";

export const IdContext=createContext({
    id:null,
    setId:()=>{}
})
// eslint-disable-next-line react/prop-types
export const IdProvider=({children})=>{
    const [id,setId]=useState(null);
    const value={id,setId};
    return(
        <IdContext.Provider value={value}>
            {children}
        </IdContext.Provider>
    )
}
