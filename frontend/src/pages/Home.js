// home component

import { useEffect } from "react"
import { useState } from "react"
import Navbar from "../components/Navbar"

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
                    <p key={property._id}>{
                        property.StreetNumber+' '+property.StreetName+', '+property.City+', '+property.StateOrProvince+', '+property.PostalCode
                        }</p>
                ))}
            </div>
        </div>
    )
}


export default Home