import { useState } from "react";

const PropertyForm = () => {
  const [address, setAddress] = useState("");
  const [ListPrice, setListPrice] = useState("");
  const [LivingArea, setLivingArea] = useState("");
  const [BedroomsTotal, setBedroomsTotal] = useState("");
  const [BathroomsTotalDecimal, setBathroomsTotalDecimal] = useState("");
  const [error, setError] = useState(null);

  const separateAddress = (address) => {
    const components = {
      StreetNumber: "",
      StreetName: "",
      City: "",
      StateOrProvince: "",
      PostalCode: "",
    };

    // Split the address by commas
    const addressParts = address.split(",");

    // Extract the street number and street name
    const streetInfo = addressParts[0].trim().split(" ");
    components.StreetNumber = streetInfo.shift();
    components.StreetName = streetInfo.join(" ");

    // Extract the remaining address components
    components.City = addressParts[1].trim();
    components.StateOrProvince = addressParts[2].trim();
    components.PostalCode = addressParts[3].trim();

    return components;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const separatedAddress = separateAddress(address);

    const property = {
      ...separatedAddress,
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
        setAddress("");
        setListPrice("");
        setLivingArea("");
        setBedroomsTotal("");
        setBathroomsTotalDecimal("");
        setError(null);
        console.log("New property has been added");
      }
    } catch (error) {
      console.error("Error submitting property:", error);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Property</h3>

      <label>Address:</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
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