import React from 'react';

function PaymentDetails() {
  return (
    <div className="col-md-6 col-sm-12">
      <h2>Confirm Payment Details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="bic" className="form-label">BIC (Swift-Code):</label>
          <input type="text" id="bic" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="iban" className="form-label">IBAN:</label>
          <input type="text" id="iban" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="accholder" className="form-label">Account Holder's Name:</label>
          <input type="text" id="accholder" className="form-control" />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="savechk" />
          <label htmlFor="savechk" className="form-check-label">
            Save my bank details for future purchases?
          </label>
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;

