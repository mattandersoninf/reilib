
// authContext

import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {

    switch (action.type){
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }

}

export const AuthContextProvider = ({ children }) => {

    // when you first open the webpage, you shouldn't be logged in so the user is null
    const [state, dispatch] = useReducer(authReducer, {
        user:null
    })

    // once you've logged in, you want to maintain the user information in the Authcontext
    // by using the useEffect function, this will check your local storage to see any set
    // set values and if a user already exists in there because you'd already logged in,
    // the Authcontext will grab that
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch({type: 'LOGIN', payload: user})
        }

    }, [])

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}

