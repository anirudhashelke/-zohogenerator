import React  from 'react';

const InvoiceItem = ({ items, setItems }) => {
  const handleItemChange = (index, event) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [event.target.name]: event.target.value } : item
    );
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  return (
    <div className="invoice-items">
      <h3>Invoice Items</h3>
      {items.map((item, index) => (
        <div key={index}>
          <input type="text" name="description" placeholder="Item Description" value={item.description} onChange={(e) => handleItemChange(index, e)} />
          <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} />
          <input type="number" name="price" placeholder="Price" value={item.price} onChange={(e) => handleItemChange(index, e)} />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default InvoiceItem;
