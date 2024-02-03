import './App.css'
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageCarousal from './components/ImageCarousal';
import Login from './components/Login';
import UpdateProd from './components/UpdateProd';
import SignUp from './components/SignUp';

function App() {

  const [user, setUser] = useState('');
 const onLogin = (username)=>{
  setUser(username);
 }
  const handleSignUp = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(''); 
  };
  console.log("user a",user)
  
  return (
    <>
    <Router>
    <Navbar user={user} onLogout={handleLogout}/>
      <Routes>
          <Route exact path='/' element={
            <>
            {user ? (
        <Home/>
      ) : (
        <>
        <ImageCarousal/>
        <p className='AppPera'>Login or Sign Up to see  Products.</p>
        </>
      )}
            </>
          }/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/login' element={<Login user={user} onLogin={handleSignUp}/>}/>
          <Route exact path='/signup' element={<SignUp  onSignUp={handleSignUp}  />}/>
          <Route exact path='/product/:id' element={<UpdateProd/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

          {/* <Route exact path='/' element={<Login/>?(<></>):(<></>)}/> */}