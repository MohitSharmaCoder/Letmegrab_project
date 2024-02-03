import React from 'react'
import { Link } from 'react-router-dom';
import '../compStyle/Navbar.css'
import logo from '../images/Logo'
import styled from 'styled-components';
const Navbar = ({ user, onLogout }) => {
  return (
    <>
      <nav className="navbar">
      <div className="logo"><img src={logo} alt="" /></div>
      <div className="navbar-links">
      <NavItem>
          {user ? (<div className='nameUser'>Welcome, <span> {`${user}!`}</span> </div>): (<><div className="nameUser">'Guest User'</div>
           <div className="logMain">
           <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
           </div>
          </> )}
          
        </NavItem>
        {user ? (
          <NavItem>
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
          </NavItem>
        ) : null}
        
      </div>
    </nav> 
    </>
  )
}

const NavItem = styled.div`
  margin-right: 0px;
  color: #fff;
  font-size: 16px;
  display:flex;
  .logMain{
    margin-left:10px;
  }
  @media screen and (max-width: 660px) {
    justify-content:center;
    align-items:center;
  }
`;

const LogoutButton = styled.button`
  background-color: #52ab98;
  font-size:16px;
  font-weight:600;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    background-color: #2b6777;
  }
`;

export default Navbar
