// home page

import { useEffect, useState } from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";
// import { useAuthContext } from "../hooks/useAuthContext";


// components
import PropertyDetails from "../components/PropertyDetails";
import PropertyForm from "../components/PropertyForm";

const Home = () => {

    // const [properties, setProperties] = useState(null);
    const {properties, dispatch} = usePropertiesContext();
    // const {user} = useAuthContext();

    useEffect(() =>{
        const fetchProperties = async() => {
            const response = await fetch('/api/properties'
                /*, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${user.token}`
                }
            }
            */
           )
            const json = await response.json()

            console.log(json)

            if (response.ok){
                //setProperties(json)
                dispatch({type: 'SET_PROPERTIES', payload: json})
            }

        }

        fetchProperties()
    },[])

/*
    }, [dispatch
        //, user
    ])
*/

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
