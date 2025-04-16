import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./src/pages/Home";
import CompanyDirectory from "./src/pages/CompanyDirectory";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Cart from "./src/pages/Cart";
import Company from "./src/pages/Company";
import CompaniesByProduct from "./src/pages/CompaniesByProduct";
import ProductDirectory from "./src/pages/ProductDirectory";
import Product from "./src/pages/Product";
import Sellers from "./src/pages/Sellers";
import Softwares from "./src/pages/Softwares";
import Footer from "./src/pages/Footer"
import "./src/assets/css/app.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company-directory" element={<CompanyDirectory/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/companies-by-product" element={<CompaniesByProduct/>} />
        <Route path="/product-directory" element={<ProductDirectory/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/sellers" element={<Sellers/>} />
        <Route path="/softwares" element={<Softwares/>} />
        {/* Add more routes here */}
      </Routes>
      <Footer/>
    </Router>
    </React.StrictMode>,
  )
