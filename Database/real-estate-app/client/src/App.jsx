import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ListingDashboard from './components/Listing';
import AddListing from './components/AddListing';
import BrowseListings from './components/BrowseListing';
import AgreementDashboard from './components/AgreementDashboard';
import CreateAgreement from './components/CreateAgreement';
import { Button, Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Header />
        <h1>Real Estate Management System</h1>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/listing" element={<ListingDashboard />} />
          <Route path="/admin/agreements" element={<AgreementDashboard />} />
          <Route path="/admin/agreement/create" element={<CreateAgreement />} />
          <Route path="/dealer/listing" element={<ListingDashboard />} />
          <Route path="/dealer/listing/create" element={<AddListing />} />
          <Route path="/client" element={<BrowseListings />} />
        </Routes>
      </div>
    </Router>
  );
}

// Header Component with Logout Button
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Navbar bg="light" className="justify-content-end">
      <Container>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default App;
