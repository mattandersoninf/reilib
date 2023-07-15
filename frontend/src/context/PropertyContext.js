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