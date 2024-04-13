

import { usePropertiesContext } from "../hooks/usePropertiesContext";
import { useAuthContext } from "../hooks/useAuthContext";
//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

/*
function reformatDate(dateString) {
    let date = new Date(dateString); 
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0')
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-indexed
    let year = date.getFullYear();
    
    return `${hours}:${minutes}:${seconds}, ${month}/${day}/${year}`;
} 
*/ 

const PropertyDetails = ({property}) => {

    const { dispatch } = usePropertiesContext();

    const user = useAuthContext();

    console.log("User AuthContext in PropertyDetails: ", user)

    const handleClick =  async() => {

        if(!user){
            return
        }


        const response = await fetch('/api/properties/' + property._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }

        })

        const json = await response.json()

        if (response.ok){

            dispatch({type:'DELETE_PROPERTY', payload: json})

        }


    }

    return (
        <div className="property-details">
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
            <p>{formatDistanceToNow(new Date(property.createdAt), {addSuffix:true} )}</p>
            {
                //{reformatDate(property.createdAt)}
            }
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PropertyDetails
