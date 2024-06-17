/* NewProperty.js */

import { useState } from "react";

const NewProperty = props => {
    const [newStreetAddress, setStreetAddress] = useState("");
    const [newCity, setCity] = useState("");
    const [newStateOrProvince, setStateOrProvince] = useState("");
    const [newPostalCode, setPostalCode] = useState("");
    const [newListPrice, setListPrice] = useState("");
    const [newLivingArea, setLivingArea] = useState("");
    const [newBedroomsTotal, setBedroomsTotal] = useState("");
    const [newBathroomsTotalDecimal, setBathroomsTotalDecimal] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const separateStreetAddress = (streetAddress) => {
        const components = {
            StreetNumber: "",
            StreetName: "",
        };

        // Split the address by commas
        const streetAddressParts = streetAddress.split(",");

        // Extract the street number and street name
        const streetInfo = streetAddressParts[0].trim().split(" ");
        components.StreetNumber = streetInfo.shift();
        components.StreetName = streetInfo.join(" ");

        return components;
    };

    const addPropertyHandler = async(event) => {
        
        event.preventDefault();

        const separatedAddress = separateStreetAddress(newStreetAddress);

        const newProperty = {
            ...separatedAddress,
            newCity,
            newStateOrProvince,
            newPostalCode,
            newListPrice,
            newLivingArea,
            newBedroomsTotal,
            newBathroomsTotalDecimal,
            // this is a temp createdAt value since mognoDB autmatically makes this with new entries
            createdAt:'2024-04-20T06:25:22.180+00:00',
        };

        try{
            props.onAddProperty(newProperty);
        } catch (error){
            console.error("Error submitting property:", error);
        }
    }

    return (
        <form className="new-property" onSubmit={addPropertyHandler}>
            <h3>Add a New Property</h3>

            <label>Street Address:</label>
            <input
            type="text"
            onChange={(e) => setStreetAddress(e.target.value)}
            value={newStreetAddress}
            className={emptyFields.includes('StreetAddress') ? 'error' : ''}
            />

            <label>City:</label>
            <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={newCity}
            className={emptyFields.includes('City') ? 'error' : ''}
            />

            <label>State:</label>
            <input
            type="text"
            onChange={(e) => setStateOrProvince(e.target.value)}
            value={newStateOrProvince}
            className={emptyFields.includes('StateOrProvince') ? 'error' : ''}
            />

            <label>Zip Code:</label>
            <input
            type="text"
            onChange={(e) => setPostalCode(e.target.value)}
            value={newPostalCode}
            className={emptyFields.includes('PostalCode') ? 'error' : ''}
            />

            <label>List Price:</label>
            <input
            type="number"
            onChange={(e) => setListPrice(e.target.value)}
            value={newListPrice}
            className={emptyFields.includes('ListPrice') ? 'error' : ''}
            />

            <label>Living Area (sq ft):</label>
            <input
            type="text"
            onChange={(e) => setLivingArea(e.target.value)}
            value={newLivingArea}
            className={emptyFields.includes('LivingArea') ? 'error' : ''}
            />

            <label>Total Bedrooms:</label>
            <input
            type="text"
            onChange={(e) => setBedroomsTotal(e.target.value)}
            value={newBedroomsTotal}
            className={emptyFields.includes('BedroomsTotal') ? 'error' : ''}
            />

            <label>Total Bathrooms:</label>
            <input
            type="text"
            onChange={(e) => setBathroomsTotalDecimal(e.target.value)}
            value={newBathroomsTotalDecimal}
            className={emptyFields.includes('BathroomsTotalDecimal') ? 'error' : ''}
            />

            <button type="submit">Submit</button>
            {error && <div className="error">{error}</div>}
            </form>

    );
  
};

export default NewProperty;