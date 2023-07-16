/* code block 9 */
// home page

import { useEffect } from "react"
import { usePropertiesContext } from "../hooks/usePropertiesContext"


// components
import PropertyDetails from "../components/PropertyDetails"
import PropertyForm from "../components/PropertyForm"



const Home = () => {

    const {properties, dispatch} = usePropertiesContext()

    useEffect(() =>{
        const fetchProperties = async() => {
            const response = await fetch('/api/properties')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_PROPERTIES', payload: json})
            }

        }

        fetchProperties()

    }, [dispatch])


    return (
        <div className="home">
            <div className="properties">
                {properties && properties.map((property) => (
                    <PropertyDetails key={property._id} property={property}/>
                ))}
            </div>
            <PropertyForm />
        </div>
    )
}


export default Home
