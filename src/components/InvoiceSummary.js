import React from 'react';

const InvoiceSummary = ({ items, tax, discount }) => {
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const taxAmount = (subtotal * tax) / 100;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + taxAmount - discountAmount;

  return (
    <div className="invoice-summary">
      <h3>Summary</h3>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${taxAmount.toFixed(2)} ({tax}%)</p>
      <p>Discount: -${discountAmount.toFixed(2)} ({discount}%)</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default InvoiceSummary;
