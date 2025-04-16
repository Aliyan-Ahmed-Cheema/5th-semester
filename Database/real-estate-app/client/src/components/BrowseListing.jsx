import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const BrowseListings = () => {
  const [listings, setListings] = useState([]);

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

  const handleInterestClick = async (listingId) => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user || user.role !== 'CLIENT') {
      alert('Please log in as a client to express interest.');
      return;
    }
  
    const clientId = user.id;
    console.log(listingId);
    
  console.log(clientId);
  
    try {
        await axios.post('http://localhost:5000/api/listings/interest', {
            listingId,
            clientId,
          });          
      alert('Your interest has been recorded.');
    } catch (error) {
      console.error('Error recording interest:', error);
      alert('Failed to record interest. Please try again.');
    }
  };
  

  return (
    <Container>
      <h2 className="my-4">Browse Listings</h2>
      <Row>
        {listings.length > 0 ? (
          listings.map((listing) => (
            <Col key={listing.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{listing.propertyName}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {listing.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Type:</strong> {listing.listingType}
                  </Card.Text>
                  {listing.listingType === 'SALE' && (
                    <Card.Text>
                      <strong>Sale Price:</strong> ${listing.salePrice}
                    </Card.Text>
                  )}
                  {listing.listingType === 'RENT' && (
                    <Card.Text>
                      <strong>Rent Amount:</strong> ${listing.rentAmount}
                    </Card.Text>
                  )}
                  {listing.listingType === 'LEASE' && (
                    <Card.Text>
                      <strong>Lease Amount:</strong> ${listing.leaseAmount} (Duration: {listing.leaseDuration} months)
                    </Card.Text>
                  )}
                  <Card.Text>
                    <strong>Property Type:</strong> {listing.propertyType}
                  </Card.Text>
                  <Card.Text>
                    <strong>Address:</strong> {listing.address}, {listing.city}, {listing.state}, {listing.postalCode}
                  </Card.Text>
                  <Card.Text>
                    <strong>Bedrooms:</strong> {listing.bedrooms} | <strong>Bathrooms:</strong> {listing.bathrooms}
                  </Card.Text>
                  <Card.Text>
                    <strong>Contact:</strong> {listing.contactNumber}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleInterestClick(listing.id)}>
                    I'm Interested
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">No listings available at the moment.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BrowseListings;
