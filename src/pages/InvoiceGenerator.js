import React, { useState } from 'react';
import CustomerDetails from '../components/CustomerDetails';
import InvoiceItem from '../components/InvoiceItem';
import InvoiceSummary from '../components/InvoiceSummary';
import InvoiceActions from '../components/InvoiceActions';

const InvoiceGenerator = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);
  const [tax, ] = useState(10);
  const [discount,] = useState(5);

  return (
    <div className="invoice-generator">
      <h1>Invoice Generator</h1>
      <div className="invoice">
        <CustomerDetails customer={customer} setCustomer={setCustomer} />
        <InvoiceItem items={items} setItems={setItems} />
        <InvoiceSummary items={items} tax={tax} discount={discount} />
      </div>
      <InvoiceActions />
    </div>
  );
};

export default InvoiceGenerator;
