// home page

import { useEffect, useState } from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";
import { useAuthContext } from "../hooks/useAuthContext";


// components
import PropertyList from "../components/PropertyList/PropertyList"
import NewProperty from "../properties/components/NewProperty";

const Home = () => {

    // const [properties, setProperties] = useState(null);
    const {properties, dispatch} = usePropertiesContext();
    const {user} = useAuthContext();

    const [propertyList, setPropertyList] = useState ([
        {
            id: 'p1',
            StreetNumber: '99',
            StreetName: 'gooner',
            City: 'goonerville',
            StateOrProvince: 'Texas',
            PostalCode: '12345',
            ListPrice: '100000',
            LivingArea: '3000',
            BedroomsTotal: '2',
            BathroomsTotalDecimal: '2.5',
            user_id: 'test1',
            Analyses: '',
            createdAt: '2024-04-16T05:27:58.340+00:00'
        },
        {
            id: 'p2',
            StreetNumber: '88',
            StreetName: 'gooned',
            City: 'goonervilles',
            StateOrProvince: 'California',
            PostalCode: '67890',
            ListPrice: '200000',
            LivingArea: '4000',
            BedroomsTotal: '3',
            BathroomsTotalDecimal: '1',
            user_id: 'test2',
            Analyses: '',
            createdAt: '2024-04-20T06:25:22.180+00:00'
        }
    ]);

    const addNewPropertyHandler = (newProperty) => {
        
        setPropertyList(prevPropertyList => prevPropertyList.concat(newProperty));
        
    };


    /*
    useEffect(() =>{

        const fetchProperties = async() => {

            const response = await fetch('http://localhost:4000/api/properties', 
                
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
    */



    return (
        <div className="home">
            <NewProperty onAddProperty = {addNewPropertyHandler}/>
            <PropertyList properties = {propertyList}/>
        </div>
    )

}

/*
            <div className="properties">
                {properties && properties.map((property) => (
                    <PropertyDetails key={property._id} property={property}/>
                ))}
            </div>
            */


export default Home
