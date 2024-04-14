// useLogout.js

/* this will allow the state of the page to change
    when users interact with the webpage
*/ 
import { useAuthContext } from "./useAuthContext";
import { usePropertiesContext } from "./usePropertiesContext";

export const useLogout = () => {
    
    // this dispatch is change change the authcotext for logging
    const { dispatch } = useAuthContext();

    // this dispatch will clear the property context once you log out
    // if you don't and you try to log in as another user, the initial auth state
    // is still visble for a moment so this prevents users from seeing
    // other users property information between logins
    const { dispatch: propertiesDispatch } = usePropertiesContext();

    const logout = () => {

        // remove the current user from the localStorage
        localStorage.removeItem('user');

        // update AuthContext with logout
        dispatch({type: 'LOGOUT'});

        propertiesDispatch({type: "SET_PROPERTIES", payload: null})

    }

    return {logout}

}