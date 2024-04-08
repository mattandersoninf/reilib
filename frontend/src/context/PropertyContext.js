/* PropertyContext.js */

/* this is used when data is passed on the webpage. In this context,
when a new property is added to the database, the page's state will change
to reflect that */

import { createContext, useReducer } from "react";

export const PropertiesContext = createContext();

export const propertiesReducer = (state, action) => {
    switch (action.type){
        case 'SET_PROPERTIES':
            return {
                properties: action.payload
            }
        case 'CREATE_PROPERTY':
            return {
                properties: [action.payload, ...state.properties]
            }
        case 'DELETE_PROPERTY':

            return {
                properties: state.properties.filter((p) => p._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const PropertiesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(propertiesReducer, {
        properties: null
    })

    return(
        
        <PropertiesContext.Provider value={{...state, dispatch}}>
            
            { children }

        </PropertiesContext.Provider>

    )
}
