import React, { useState } from 'react';

function DeliveryOptions() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="col-md-6 col-sm-12">
      <h2>Select Delivery Options</h2>
      <div className="d-flex align-items-center">
        <img src="TV-image.jpeg" alt="OLED TV" className="img-fluid w-50" />
        <div className="ms-3">
          <h4>OLED TV 195 cm (77 Inch) [Model Year 2022]</h4>
          <p>Condition: <strong>Brand-new</strong></p>
          <p>Unit Price: 2000/-</p>
          <label htmlFor="qty" className="form-label">Quantity:</label>
          <select 
            className="form-select" 
            id="qty" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <a href="#change" className="d-block mt-2">Change product</a>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions;