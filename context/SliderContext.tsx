import React, {createContext, useContext, useState} from 'react'
import {FC} from 'react'

export const SliderContext = createContext({});

 const SliderProvider: FC<{children: any}> = ({children}) => {
    const [value, setValue] = useState(0)
    
    return (
        <SliderContext.Provider value={{value, setValue}}>
            {children}
        </SliderContext.Provider>
    )
}

