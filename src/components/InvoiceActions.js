import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const InvoiceActions = () => {
  const downloadInvoice = () => {
    const invoice = document.querySelector('.invoice');
    html2canvas(invoice).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div className="invoice-actions">
      <button onClick={downloadInvoice}>Download Invoice</button>
    </div>
  );
};

export default InvoiceActions;
