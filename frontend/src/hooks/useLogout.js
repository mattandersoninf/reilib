// useLogout.js

/* this will allow the state of the page to change
    when users interact with the webpage
*/ 
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {

        // remove the current user from the localStorage
        localStorage.removeItem('user');

        // update AuthContext with logout
        dispatch({type: 'LOGOUT'});

    }

    return {logout}

}