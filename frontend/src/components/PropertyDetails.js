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
            <p>{property.createdAt}</p>
        </div>
    )
}

export default PropertyDetails