import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container, ButtonGroup, Row, Col, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AgreementDashboard = () => {
  const [agreements, setAgreements] = useState([]);
  const [show, setShow] = useState(false);
  const [currentAgreement, setCurrentAgreement] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgreements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/agreements');
        setAgreements(response.data);
      } catch (error) {
        console.error('Error fetching agreements:', error);
      }
    };

    fetchAgreements();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this agreement?')) {
      try {
        await axios.delete(`http://localhost:5000/api/agreements/${id}`);
        setAgreements(agreements.filter((agreement) => agreement.id !== id));
      } catch (error) {
        console.error('Error deleting agreement:', error);
      }
    }
  };

  const handleEditClick = (agreement) => {
    setCurrentAgreement(agreement);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAgreement({ ...currentAgreement, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5000/api/agreements/${currentAgreement.id}`, currentAgreement);
      const response = await axios.get('http://localhost:5000/api/agreements');
      setAgreements(response.data);
      setShow(false);
    } catch (error) {
      console.error('Error updating agreement:', error);
    }
  };

  return (
    <Container>
      <Row className="my-4 justify-content-between align-items-center">
        <Col>
          <h2>Agreement Dashboard</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => navigate('/admin/agreement/create')}>
            Create Agreement
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Dealer</th>
            <th>Client</th>
            <th>Property</th>
            <th>Agreement Type</th>
            <th>Price / Rent / Lease</th>
            <th>Lease Duration</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agreements.length > 0 ? (
            agreements.map((agreement, index) => (
              <tr key={agreement.id}>
                <td>{index + 1}</td>
                <td>{agreement.dealerName}</td>
                <td>{agreement.clientName}</td>
                <td>{agreement.propertyName}</td>
                <td>{agreement.agreementType}</td>
                <td>
                  {agreement.agreementType === 'SALE' && `$${agreement.price}`}
                  {agreement.agreementType === 'RENT' && `$${agreement.rentAmount}`}
                  {agreement.agreementType === 'LEASE' &&
                    `$${agreement.leaseAmount} (Duration: ${agreement.leaseDuration} months)`}
                </td>
                <td>{agreement.leaseDuration || 'N/A'}</td>
                <td>{new Date(agreement.createdAt).toLocaleDateString()}</td>
                <td>
                  <ButtonGroup aria-label="Actions">
                    <Button variant="warning" className="me-1" onClick={() => handleEditClick(agreement)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(agreement.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No agreements found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Edit Agreement Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Agreement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Agreement Type */}
            <Form.Group className="mb-3">
              <Form.Label>Agreement Type</Form.Label>
              <Form.Select name="agreementType" value={currentAgreement.agreementType} onChange={handleChange}>
                <option value="SALE">Sale</option>
                <option value="RENT">Rent</option>
                <option value="LEASE">Lease</option>
              </Form.Select>
            </Form.Group>

            {/* Price for Sale */}
            {currentAgreement.agreementType === 'SALE' && (
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={currentAgreement.price || ''}
                  onChange={handleChange}
                  placeholder="Enter Sale Price"
                />
              </Form.Group>
            )}

            {/* Rent Amount for Rent */}
            {currentAgreement.agreementType === 'RENT' && (
              <Form.Group className="mb-3">
                <Form.Label>Rent Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="rentAmount"
                  value={currentAgreement.rentAmount || ''}
                  onChange={handleChange}
                  placeholder="Enter Rent Amount"
                />
              </Form.Group>
            )}

            {/* Lease Amount and Duration for Lease */}
            {currentAgreement.agreementType === 'LEASE' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Lease Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="leaseAmount"
                    value={currentAgreement.leaseAmount || ''}
                    onChange={handleChange}
                    placeholder="Enter Lease Amount"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lease Duration (months)</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaseDuration"
                    value={currentAgreement.leaseDuration || ''}
                    onChange={handleChange}
                    placeholder="Enter Lease Duration"
                  />
                </Form.Group>
              </>
            )}
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

export default AgreementDashboard;
