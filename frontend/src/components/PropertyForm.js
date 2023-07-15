import { useState } from "react";
import { usePropertiesContext } from "../hooks/usePropertiesContext";

const PropertyForm = () => {
  const { dispatch } = usePropertiesContext();
  const [StreetAddress, setStreetAddress] = useState("");
  const [City, setCity] = useState("");
  const [StateOrProvince, setStateOrProvince] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [ListPrice, setListPrice] = useState("");
  const [LivingArea, setLivingArea] = useState("");
  const [BedroomsTotal, setBedroomsTotal] = useState("");
  const [BathroomsTotalDecimal, setBathroomsTotalDecimal] = useState("");
  const [error, setError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const separatedAddress = separateStreetAddress(StreetAddress);

    const property = {
      ...separatedAddress,
      City,
      StateOrProvince,
      PostalCode,
      ListPrice,
      LivingArea,
      BedroomsTotal,
      BathroomsTotalDecimal,
    };

    try {
    console.log(property)
      const response = await fetch("/api/properties", {
        method: "POST",
        body: JSON.stringify(property),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setStreetAddress("");
        setCity("");
        setStateOrProvince("");
        setPostalCode("");
        setListPrice("");
        setLivingArea("");
        setBedroomsTotal("");
        setBathroomsTotalDecimal("");
        setError(null);
        console.log("New property has been added");
        dispatch({type: "CREATE_PROPERTY", payload: json})
      }
    } catch (error) {
      console.error("Error submitting property:", error);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Property</h3>

      <label>Street Address:</label>
      <input
        type="text"
        onChange={(e) => setStreetAddress(e.target.value)}
        value={StreetAddress}
      />

      <label>City:</label>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={City}
      />

      <label>State:</label>
      <input
        type="text"
        onChange={(e) => setStateOrProvince(e.target.value)}
        value={StateOrProvince}
      />

      <label>Zip Code:</label>
      <input
        type="text"
        onChange={(e) => setPostalCode(e.target.value)}
        value={PostalCode}
      />

      <label>List Price:</label>
      <input
        type="number"
        onChange={(e) => setListPrice(e.target.value)}
        value={ListPrice}
      />

      <label>Living Area (sq ft):</label>
      <input
        type="text"
        onChange={(e) => setLivingArea(e.target.value)}
        value={LivingArea}
      />

      <label>Total Bedrooms:</label>
      <input
        type="text"
        onChange={(e) => setBedroomsTotal(e.target.value)}
        value={BedroomsTotal}
      />

      <label>Total Bathrooms:</label>
      <input
        type="text"
        onChange={(e) => setBathroomsTotalDecimal(e.target.value)}
        value={BathroomsTotalDecimal}
      />

      <button type="submit">Submit</button>
      {error && <div classname="error">{error}</div>}
    </form>
  );
};

export default PropertyForm;