// property form component

import { useState } from "react"

const PropertyForm = () => {
    const [address, setAddress] = useState('')
    const [listPrice, setListPrice] = useState('')
    const [livingArea, setLivingArea] = useState('')
    const [totalBedrooms, setTotalBedrooms] = useState('')
    const [totalBathrooms, setTotalBathrooms] = useState('')

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Property</h3>

            <label>Address</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}/>
                
            <label>List Price</label>
            <input
                type="number"
                onChange={(e) => setListPrice(e.target.value)}
                value={listPrice}/>
                
            <label>Living Area</label>
            <input
                type="text"
                onChange={(e) => setLivingArea(e.target.value)}
                value={livingArea}/>
                
            <label>Total Bedrooms</label>
            <input
                type="text"
                onChange={(e) => setTotalBedrooms(e.target.value)}
                value={totalBedrooms}/>
                
            <label>Total Bathrooms</label>
            <input
                type="text"
                onChange={(e) => setTotalBathrooms(e.target.value)}
                value={totalBathrooms}/>
        </form>

    )
}
