import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import {Logo} from './pics';
function LoginComponent () {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [validateMgs, setValidateMgs] = useState ('');
  const navigate = useNavigate ();
  const resize = {
    marginRight: '10px',
  };

  const validator = () => {
    const mgs = {};
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
    e.preventDefault ();
    const isValid = validator ();
    if (!isValid) {
      return;
    } else {
      axios
        .post ('http://localhost:3001/login', {username, password})
        .then (result => {
          if (result.data === 'No record') {
            alert ('Your Username or Password is incorrect!');
          } else if (result.data.role == 'admin') {
            console.log (result.data);
            window.location.href = 'http://localhost:3002';
          } else {
            console.log (result);
            window.sessionStorage.setItem ('fullname', result.data.fullname);
            navigate ('/home');
          }
        })
        .catch (err => console.log (err));
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{flexDirection: 'column', backgroundColor: 'whitesmoke'}}
    >

      <div className="border-form bg-white p-3 rounded">
        <div style={{paddingBottom: '63px'}}>
          <Logo />
        </div>
        <form onSubmit={handleSubmit}>
          <h4 style={{textAlign: 'center'}}>Sign In</h4>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                style={resize}
                id="customCheck1"
              />

              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <p>Don't have an account? <Link to="/register">Sign up</Link> here</p>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
