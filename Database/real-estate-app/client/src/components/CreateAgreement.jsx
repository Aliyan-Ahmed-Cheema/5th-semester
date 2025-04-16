import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateAgreement = () => {
  const [dealers, setDealers] = useState([]);
  const [listings, setListings] = useState([]);
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    dealerId: '',
    clientId: '',
    propertyId: '',
    agreementType: 'SALE',
    price: '',
    rentAmount: '',
    leaseAmount: '',
    leaseDuration: '',
  });

  const navigate = useNavigate();

  // Fetch all dealers on component mount
  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/dealers');
        setDealers(response.data);
      } catch (error) {
        console.error('Error fetching dealers:', error);
      }
    };

    fetchDealers();
  }, []);

  // Fetch listings based on selected dealer
  useEffect(() => {
    if (formData.dealerId) {
      const fetchListings = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/listings/dealer/${formData.dealerId}`);
          setListings(response.data);
        } catch (error) {
          console.error('Error fetching listings:', error);
        }
      };

      fetchListings();
    }
  }, [formData.dealerId]);

  // Fetch interested clients based on selected listing
  useEffect(() => {
    if (formData.propertyId) {
      const fetchClients = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/listings/${formData.propertyId}/interested-clients`);
          setClients(response.data);
        } catch (error) {
          console.error('Error fetching interested clients:', error);
        }
      };

      fetchClients();
    }
  }, [formData.propertyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/agreements', formData);
      alert('Agreement created successfully');
      navigate('/admin/agreements');
    } catch (error) {
      console.error('Error creating agreement:', error);
      alert('Error creating agreement');
    }
  };

  return (
    <Container className="my-5">
      <h2>Create New Agreement</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Dealer</Form.Label>
          <Form.Select name="dealerId" value={formData.dealerId} onChange={handleChange} required>
            <option value="">Select Dealer</option>
            {dealers.map((dealer) => (
              <option key={dealer.id} value={dealer.id}>
                {dealer.firstName} {dealer.lastName} ({dealer.email})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Property Listing</Form.Label>
          <Form.Select name="propertyId" value={formData.propertyId} onChange={handleChange} required>
            <option value="">Select Listing</option>
            {listings.map((listing) => (
              <option key={listing.id} value={listing.id}>
                {listing.propertyName} - {listing.listingType}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Client</Form.Label>
          <Form.Select name="clientId" value={formData.clientId} onChange={handleChange} required>
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.firstName} {client.lastName} ({client.email})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Agreement Type</Form.Label>
          <Form.Select name="agreementType" value={formData.agreementType} onChange={handleChange}>
            <option value="SALE">Sale</option>
            <option value="RENT">Rent</option>
            <option value="LEASE">Lease</option>
          </Form.Select>
        </Form.Group>

        {formData.agreementType === 'SALE' && (
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
          </Form.Group>
        )}

        {formData.agreementType === 'RENT' && (
          <Form.Group className="mb-3">
            <Form.Label>Rent Amount</Form.Label>
            <Form.Control type="number" name="rentAmount" value={formData.rentAmount} onChange={handleChange} required />
          </Form.Group>
        )}

        {formData.agreementType === 'LEASE' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Lease Amount</Form.Label>
              <Form.Control type="number" name="leaseAmount" value={formData.leaseAmount} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lease Duration (months)</Form.Label>
              <Form.Control type="text" name="leaseDuration" value={formData.leaseDuration} onChange={handleChange} required />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Create Agreement
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAgreement;
