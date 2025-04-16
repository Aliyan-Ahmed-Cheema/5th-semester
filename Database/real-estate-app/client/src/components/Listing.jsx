import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container, ButtonGroup, Modal, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ListingDashboard = () => {
  const [listings, setListings] = useState([]);
  const [show, setShow] = useState(false);
  const [currentListing, setCurrentListing] = useState({
    propertyName: '',
    description: '',
    listingType: '',
    salePrice: '',
    rentAmount: '',
    leaseAmount: '',
    leaseDuration: '',
    propertyType: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    contactNumber: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        await axios.delete(`http://localhost:5000/api/listings/${id}`);
        setListings(listings.filter((listing) => listing.id !== id));
      } catch (error) {
        console.error('Error deleting listing:', error);
      }
    }
  };

  const handleEditClick = (listing) => {
    setCurrentListing(listing);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentListing({ ...currentListing, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5000/api/listings/${currentListing.id}`, currentListing);
      const response = await axios.get('http://localhost:5000/api/listings');
      setListings(response.data);
      setShow(false);
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  return (
    <Container>
      <Row className="my-4 justify-content-between align-items-center">
        <Col>
          <h2>Listing Dashboard</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => navigate('/dealer/listing/create')}>
            Add Listing
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Property Name</th>
            <th>Description</th>
            <th>Listing Type</th>
            <th>Price / Rent / Lease</th>
            <th>Property Type</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.length > 0 ? (
            listings.map((listing, index) => (
              <tr key={listing.id}>
                <td>{index + 1}</td>
                <td>{listing.propertyName}</td>
                <td>{listing.description}</td>
                <td>{listing.listingType}</td>
                <td>
                  {listing.listingType === 'SALE' && `Sale Price: $${listing.salePrice}`}
                  {listing.listingType === 'RENT' && `Rent Amount: $${listing.rentAmount}`}
                  {listing.listingType === 'LEASE' && `Lease Amount: $${listing.leaseAmount}, Duration: ${listing.leaseDuration} months`}
                </td>
                <td>{listing.propertyType}</td>
                <td>{listing.address}, {listing.city}, {listing.state}, {listing.postalCode}</td>
                <td>{listing.contactNumber}</td>
                <td>
                  <ButtonGroup aria-label="Actions">
                    <Button variant="warning" className="me-1" onClick={() => handleEditClick(listing)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(listing.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No listings found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Edit Listing Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Property Name</Form.Label>
              <Form.Control type="text" name="propertyName" value={currentListing.propertyName} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={currentListing.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Listing Type</Form.Label>
              <Form.Select name="listingType" value={currentListing.listingType} onChange={handleChange}>
                <option value="SALE">Sale</option>
                <option value="RENT">Rent</option>
                <option value="LEASE">Lease</option>
              </Form.Select>
            </Form.Group>

            {/* Conditional Fields Based on Listing Type */}
            {currentListing.listingType === 'SALE' && (
              <Form.Group className="mb-3">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control
                  type="number"
                  name="salePrice"
                  value={currentListing.salePrice || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            )}

            {currentListing.listingType === 'RENT' && (
              <Form.Group className="mb-3">
                <Form.Label>Rent Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="rentAmount"
                  value={currentListing.rentAmount || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            )}

            {currentListing.listingType === 'LEASE' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Lease Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="leaseAmount"
                    value={currentListing.leaseAmount || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lease Duration (in months)</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaseDuration"
                    value={currentListing.leaseDuration || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Property Type</Form.Label>
              <Form.Control type="text" name="propertyType" value={currentListing.propertyType} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={currentListing.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" value={currentListing.city} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" name="state" value={currentListing.state} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" name="postalCode" value={currentListing.postalCode} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control type="number" name="bedrooms" value={currentListing.bedrooms} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bathrooms</Form.Label>
              <Form.Control type="number" name="bathrooms" value={currentListing.bathrooms} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Area (sq ft)</Form.Label>
              <Form.Control type="number" name="area" value={currentListing.area} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" name="contactNumber" value={currentListing.contactNumber} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListingDashboard;
