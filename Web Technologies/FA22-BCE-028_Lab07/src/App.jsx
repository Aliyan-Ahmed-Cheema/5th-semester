import React from 'react';
import Header from './Header.jsx';
import DeliveryOptions from './DeliveryOption.jsx';
import OrderSummary from './OrderSummary.jsx';
import PaymentDetails from './PaymentDetails.jsx';
import PaymentMethod from './PaymentMethod.jsx';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="row mb-4">
          <DeliveryOptions />
          <OrderSummary />
        </section>
        <section className="row">
          <PaymentDetails />
          <PaymentMethod />
        </section>
      </main>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
