/* PropertyPage.js 

webpage to view and edit information about a proprerty

*/

// import {useState} from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";
import { useAuthContext } from "../hooks/useAuthContext";
// import { Link } from "react-router-dom";

const PropertyPage = ({ children }) => {

    const { dispatch } = usePropertiesContext();

    const { user } = useAuthContext();

    const deleteProperty=  async() => {

        
        if(!user){
            return
        }


        const response = await fetch('/api/properties/' + property._id, 
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
        
            }
        )

        const json = await response.json()

        if (response.ok){

            dispatch({type:'DELETE_PROPERTY', payload: json})

            if (localStorage.getItem("property")){

                localStorage.removeItem("property");
            
            }


        }

        window.location.href = "/";


    }

    const property = JSON.parse(localStorage.getItem("property"))

    console.log("property:", property)
  
    return (
    <div>
        <h4>{
            property.StreetNumber+' '+property.StreetName+', '+property.City+', '+property.StateOrProvince+', '+property.PostalCode
        }</h4>
        <p><strong>Address: </strong>{
            property.StreetNumber+' '+property.StreetName+', '+property.City+', '+property.StateOrProvince+', '+property.PostalCode
        }</p>
        <p><strong>List Price: </strong>{
            property.ListPrice
        }</p>
        <p><strong>Living Area: </strong>{
            property.LivingArea
        }</p>
        <p><strong>Total Bedrooms: </strong>{
            property.BedroomsTotal
        }</p>
        <p><strong>Total Bathrooms: </strong>{
            property.BathroomsTotalDecimal
        }</p>
        <button onClick={deleteProperty} className="delete">Delete</button>
   
    </div>
    );
  };



/*({property}) => {

    return(
        <div>
            <h3>Property Name<h3/>
            <p>deez<p/>
        </div>
    );

};

*/

export default PropertyPage