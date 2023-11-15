import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
function AddUser(props) {
  const [email, setEmail] = useState ('');
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const role = 'user';
  const handleSubmit = e => {
    e.preventDefault ();
    axios
      .post ('http://localhost:3001/register', {
        fullname,
        email,
        username,
        password,
        role,
      })
      .then (() => window.location.reload())
      .catch (err => console.log (err));
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your full name..."
              onChange={e => setFullname (e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your email..."
              onChange={e => setEmail (e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={e => setUsername (e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={e => setPassword (e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddUser;