import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = ({ onSignUp }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);

    if (Object.keys(validationErrors).length === 0) {
      // Store data in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Sign up successful!');
      onSignUp(formData.username)
      navigate('/')
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    // Basic validation for empty fields
    for (const key in data) {
      if (!data[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    // Validate password match
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <SignUpContainer>
      <SignUpBox onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <InputLabel>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </InputLabel>
        <br />
        <InputLabel>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </InputLabel>
        <br />
        <InputLabel>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </InputLabel>
        <br />
        <InputLabel>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </InputLabel>
        <br />
        <SignUpButton type="submit">Sign Up</SignUpButton>

      </SignUpBox>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`
const SignUpBox = styled.form`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2{
    margin-bottom:15px;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  input{
    height:27px;
    border-radius:5px;
    border:1px solid #333;
    padding:6px 8px;
    width:100%;
  }
  input:focus {
    outline:none;
    border:1px solid #333333;
  }
`;

const SignUpButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:16px;
  font-weight:600;
  background-color: #52ab98;
  &:hover{
    background-color: #2b6777;
  }
`;
export default SignUp;