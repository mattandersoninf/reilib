// useLogin hook

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (Email, Password) => {
        setIsLoading(true)
        setError(null)
        
        /*
        console.log("Sending data to server: ", {Email, Password});
        */

        const response = await fetch('/api/users/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Email,Password})
        })

        const json = await response.json();

        console.log("JSON: ", json);

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload:json})

            setIsLoading(false)

        }

            
    }

    return {login, isLoading, error}
}
