// home page

import { useEffect, useState } from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";
import { useAuthContext } from "../hooks/useAuthContext";


// components
import PropertyDetails from "../components/PropertyDetails";
import PropertyForm from "../components/PropertyForm";

const Home = () => {

    // const [properties, setProperties] = useState(null);
    const {properties, dispatch} = usePropertiesContext();
    const {user} = useAuthContext();

    console.log('User AuthContext on the Home page:', user);

    useEffect(() =>{

        const fetchProperties = async() => {

            const response = await fetch('/api/properties', 
                
                {

                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }

                }
            )

           
            console.log('You called the user token to fetch properties on the home page.')
            console.log('User token from home page:',user.token)
            console.log('fetchprop response:',response.headers)

            const json = await response.json()


            if (response.ok){
                //setProperties(json)
                dispatch({type: 'SET_PROPERTIES', payload: json})
            }

        }
        if (user){
            fetchProperties();
        }

    },[dispatch, user])



    return (
        <div className="home">
            
            <div className="properties">
                {properties && properties.map((property) => (
                    <PropertyDetails key={property._id} property={property}/>
                ))}
            </div>
            
            <PropertyForm/>

        </div>
    )

}


export default Home
