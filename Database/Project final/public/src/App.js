
import React from'react';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Admin from './Pages/Admin.jsx';
import Land_owner from './Pages/Dealer.jsx';
import Client from './Pages/Client.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin />,
    },
    {
      path: "/Land_owner",
      element: <Land_owner />,
    },
    {
      path: "/Client",
      element: <Client />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
