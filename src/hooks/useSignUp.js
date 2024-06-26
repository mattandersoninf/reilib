// useSignUp hook

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (Email, Password, adminCode) => {
        setIsLoading(true)
        setError(null)

        // console.log("Sending data to server: ", {Email, Password});

        const response = await fetch('http://localhost:4000/api/users/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Email,Password,adminCode})
        })

        
        console.log(response.json())

        const json = await response.json();



        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            // save the json token to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload:json})

            setIsLoading(false)

        }

            
    }

    return {signup, isLoading, error}
}

