// useLogout.js

import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    // const { dispatch } = useAuthContext()

    const logout = () => {

        // remove the current user from the localStorage
        localStorage.removeItem('user');

        //dispatch({type: 'LOGOUT'});

    }

    return {logout}

}