import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddListing = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    description: '',
    listingType: 'SALE',
    salePrice: '',
    rentAmount: '',
    leaseAmount: '',
    leaseDuration: '',
    propertyType: 'HOUSE',
    address: '',
    city: '',
    state: 'PUNJAB',
    postalCode: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    contactNumber: '',
    dealerId: '', // Initialize dealerId
  });

  const navigate = useNavigate();

  // Fetch dealerId from local storage on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'DEALER') {
      setFormData((prevData) => ({ ...prevData, dealerId: user.id }));
    } else {
      alert('You must be logged in as a Dealer to create a listing.');
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/listings', formData);
      alert('Listing created successfully');
      navigate('/dealer/listing');
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('Error creating listing');
    }
  };

  return (
    <Container className="my-5">
      <h2>Create New Listing</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Listing Type</Form.Label>
          <Form.Select name="listingType" value={formData.listingType} onChange={handleChange}>
            <option value="SALE">Sale</option>
            <option value="RENT">Rent</option>
            <option value="LEASE">Lease</option>
          </Form.Select>
        </Form.Group>

        {/* Conditional Fields Based on Listing Type */}
        {formData.listingType === 'SALE' && (
          <Form.Group className="mb-3">
            <Form.Label>Sale Price</Form.Label>
            <Form.Control
              type="number"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        {formData.listingType === 'RENT' && (
          <Form.Group className="mb-3">
            <Form.Label>Rent Amount</Form.Label>
            <Form.Control
              type="number"
              name="rentAmount"
              value={formData.rentAmount}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        {formData.listingType === 'LEASE' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Lease Amount</Form.Label>
              <Form.Control
                type="number"
                name="leaseAmount"
                value={formData.leaseAmount}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lease Duration (in months)</Form.Label>
              <Form.Control
                type="text"
                name="leaseDuration"
                value={formData.leaseDuration}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Property Type</Form.Label>
          <Form.Select name="propertyType" value={formData.propertyType} onChange={handleChange}>
            <option value="HOUSE">House</option>
            <option value="APARTMENT">Apartment</option>
            <option value="LAND">Land</option>
            <option value="COMMERCIAL">Commercial</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Select name="state" value={formData.state} onChange={handleChange}>
            <option value="PUNJAB">Punjab</option>
            <option value="SINDH">Sindh</option>
            <option value="BALOCHISTAN">Balochistan</option>
            <option value="KHYBER">Khyber</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area (sq ft)</Form.Label>
          <Form.Control
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Listing
        </Button>
      </Form>
    </Container>
  );
};

export default AddListing;
