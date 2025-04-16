import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'CLIENT', // Default role
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert(`Login successful as ${formData.role}`);

      // Redirect based on the role
      if (formData.role === 'DEALER') {
        navigate('/dealer/listing');
      } else if (formData.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/client');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid email, password, or role');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="CLIENT">Client</option>
          <option value="DEALER">Dealer</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
