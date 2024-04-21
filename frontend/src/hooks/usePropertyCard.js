// useLogin hook

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const property = async (PropertyID) => {
        
        setIsLoading(true)
        setError(null)
        

        const response = await fetch('/api/properties/'+PropertyID, {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })

        const json = await response.json();
        console.log("proeprty json:",json)

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            // save the user to local storage
            localStorage.setItem('property', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload:json})

            setIsLoading(false)

        }

            
    }

    return {property, isLoading, error}
}