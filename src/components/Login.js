import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Login = ({ onLogin }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
    } else {
      setError('');
      // Check if SignUp data is stored in local storage
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.username === username && userData.password === password) {
          onLogin(username);
          navigate('/')

        } else {
          setError('Invalid username or password.');
        }
      } else {
        setError('No user found. Please sign up.');
      }
    }
  };

  return (
    <>
    <LoginContainer>
      <LoginBox>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <InputLabel>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </InputLabel>
      <br />
      <InputLabel>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </InputLabel>
      <br />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
      
      </LoginBox>
    </LoginContainer>
    </>
  );
};


const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;

const LoginBox = styled.div`
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

const LoginButton = styled.button`
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

const ErrorMessage = styled.p`
  color: red;
`;
export default Login;