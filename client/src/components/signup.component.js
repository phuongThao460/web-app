import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {Logo} from './pics'; 
function SignupComponent () {
  const [email, setEmail] = useState ('');
  const [fullname, setFullname] = useState ('');
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [validateMgs, setValidateMgs] = useState ('');
  const role = 'user';
  const navigate = useNavigate ();

  const validator = () => {
    const mgs = {};
    if (isEmpty (fullname)) {
      mgs.fullname = 'Please input your name';
    }
    if (isEmpty (email)) {
      mgs.email = 'Please input your email';
    } else if (!isEmail (email)) {
      mgs.email = 'Email is invalid';
    }
    if (isEmpty (username)) {
      mgs.username = 'Please input your username';
    }
    if (isEmpty (password)) {
      mgs.password = 'Please input your password';
    }
    setValidateMgs (mgs);
    if (Object.keys (mgs).length > 0) return false;
    return true;
  };
  const handleSubmit = e => {
    const isValid = validator ();

    e.preventDefault ();
    if (!isValid) return;
    axios
      .post ('http://localhost:3001/register', {
        fullname,
        email,
        username,
        password,
        role,
      })
      .then (result => navigate ('/'))
      .catch (err => console.log (err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{flexDirection: "column", backgroundColor: "whitesmoke"}}>
      
      <div className="border-form bg-white p-3 rounded">
      <div style={{paddingBottom: "63px"}}>
      <Logo/>
      </div>
        <form onSubmit={handleSubmit}>
        <h4 style={{textAlign: "center"}}>Sign Up</h4>

          <div className="mb-3">
            <label>Fullname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your fullname..."
              onChange={e => setFullname (e.target.value)}
            />
            <p className="text-danger text-xs italic">{validateMgs.fullname}</p>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your email..."
              onChange={e => setEmail (e.target.value)}
            />
            <p className="text-danger text-xs italic">{validateMgs.email}</p>
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={e => setUsername (e.target.value)}
            />
            <p className="text-danger text-xs italic">{validateMgs.username}</p>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={e => setPassword (e.target.value)}
            />
            <p className="text-danger text-xs italic">{validateMgs.password}</p>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>

    </div>
  );
}

export default SignupComponent;
