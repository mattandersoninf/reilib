// home page

import { useEffect } from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";
import { useAuthContext } from "../hooks/useAuthContext";


// components
import PropertyDetails from "../components/PropertyDetails";

const Home = () => {

    // const [properties, setProperties] = useState(null);
    const {properties, dispatch} = usePropertiesContext();
    const {user} = useAuthContext();


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
            
        </div>
    )

}


export default Home
