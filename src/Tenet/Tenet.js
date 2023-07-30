import React, { useState } from "react";
import './Tenet.css';

const PropertyForm = (props) => {
  const [propertyDetails, setPropertyDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
    monthlyRent: '',
    leaseTerm: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClose();
    alert('Our team will contact you soon for verification.');
  };

  return (
    <form className="PropertyForm" onSubmit={handleSubmit}>
      <h2>Property Details Form</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={propertyDetails.name} onChange={handleInputChange} required />
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" value={propertyDetails.address} onChange={handleInputChange} required />
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={propertyDetails.city} onChange={handleInputChange} required />
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" value={propertyDetails.state} onChange={handleInputChange} required />
      <label htmlFor="zipCode">Zip Code:</label>
      <input type="text" id="zipCode" name="zipCode" value={propertyDetails.zipCode} onChange={handleInputChange} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={propertyDetails.email} onChange={handleInputChange} required />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={propertyDetails.phone} onChange={handleInputChange} required />
      <label htmlFor="monthlyRent">Monthly Rent:</label>
      <input type="number" id="monthlyRent" min={5000} max={20000} name="monthlyRent" value={propertyDetails.monthlyRent} onChange={handleInputChange} required />
      <label htmlFor="leaseTerm">Lease Term (in months):</label>
      <input type="number" id="leaseTerm" name="leaseTerm" value={propertyDetails.leaseTerm} onChange={handleInputChange} required />
      <label htmlFor="avatar">Add Images:</label>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
