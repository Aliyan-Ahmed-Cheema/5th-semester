import React from 'react';

function PaymentMethod() {
  return (
    <div className="col-md-6 col-sm-12">
      <h2>Choose Payment Method</h2>
      <form>
        <div className="form-check">
          <input type="radio" name="paymentmethod" id="cc" className="form-check-input" />
          <label htmlFor="cc" className="form-check-label">Credit Card</label>
        </div>
        <div className="form-check">
          <input type="radio" name="paymentmethod" id="pp" className="form-check-input" />
          <label htmlFor="pp" className="form-check-label">PayPal</label>
        </div>
        <div className="form-check">
          <input type="radio" name="paymentmethod" id="ba" className="form-check-input" defaultChecked />
          <label htmlFor="ba" className="form-check-label">Personal Bank Account</label>
        </div>
        <div className="form-check">
          <input type="radio" name="paymentmethod" id="bf" className="form-check-input" />
          <label htmlFor="bf" className="form-check-label">Bank Financing</label>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethod;