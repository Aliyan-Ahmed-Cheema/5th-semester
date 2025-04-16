import React from 'react';

function OrderSummary() {
  return (
    <div className="col-md-6 col-sm-12">
      <h2>Order Summary</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span>Items Cost:</span>
          <span>6000</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Delivery Insurance:</span>
          <span>35</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Delivery Charges:</span>
          <span>Free for members</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total Purchase:</span>
          <strong>6035</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>VAT:</span>
          <span>1146 (included)</span>
        </li>
      </ul>
      <a href="#" className="btn btn-outline-primary mt-3">Change Address</a>
    </div>
  );
}

export default OrderSummary;

