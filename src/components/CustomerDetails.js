import React from 'react';

const CustomerDetails = ({ customer, setCustomer }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <div className="customer-details">
      <h3>Customer Details</h3>
      <input type="text" name="name" placeholder="Customer Name" value={customer.name} onChange={handleChange} />
      <input type="text" name="email" placeholder="Customer Email" value={customer.email} onChange={handleChange} />
      <input type="text" name="address" placeholder="Customer Address" value={customer.address} onChange={handleChange} />
    </div>
  );
};

export default CustomerDetails;
