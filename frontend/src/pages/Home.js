// home component

import { useEffect } from "react"
import { useState } from "react"
import Navbar from "../components/Navbar"
import PropertyDetails from "../components/PropertyDetails"

const Home = () => {

    const [properties, setProperties] = useState(null)

    useEffect(() =>{
        const fetchProperties = async() => {
            const response = await fetch('/api/properties')
            const json = await response.json()

            if (response.ok){
                setProperties(json)
            }

        }

        fetchProperties()

    }, [])


    return (
        <div className="home">
            <Navbar/>
            <div className="properties">
                {properties && properties.map((property) => (
                    <PropertyDetails key={property._id} property={property}/>
                ))}
            </div>
        </div>
    )
}


export default Home