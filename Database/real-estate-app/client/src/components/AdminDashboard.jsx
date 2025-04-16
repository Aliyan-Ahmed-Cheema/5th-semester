import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container, ButtonGroup, Modal, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${currentUser.id}`, currentUser);
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
      setShow(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Container>
      <Row className="my-4 justify-content-between align-items-center">
        <Col>
            <h2>Admin Dashboard</h2>
        </Col>
        <Col className="d-flex justify-content-end">
            <Button variant="primary" className="me-2" onClick={() => navigate('/admin/listing')}>
            Listing
            </Button>
            <Button variant="secondary" onClick={() => navigate('/admin/agreements')}>
            Agreement
            </Button>
        </Col>
        </Row>


      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <ButtonGroup aria-label="Actions">
                    <Button variant="warning" className="me-1" onClick={() => handleEditClick(user)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Edit User Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={currentUser.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={currentUser.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" value={currentUser.role} onChange={handleChange}>
                <option value="CLIENT">Client</option>
                <option value="DEALER">Dealer</option>
                <option value="ADMIN">Admin</option>
              </Form.Select>
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

export default AdminDashboard;
