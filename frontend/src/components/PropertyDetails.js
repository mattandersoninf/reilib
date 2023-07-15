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


const PropertyDetails = ({property}) => {
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
            <p><strong>Upload Date: </strong>{reformatDate(property.createdAt)}</p>
        </div>
    )
}

export default PropertyDetails