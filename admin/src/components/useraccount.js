/* eslint-disable eqeqeq */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AddUser from './AddUser';

function Client () {
  const [client, setClients] = useState ([]);
  const [modalShow, setModalShow] = useState (false);

  useEffect (() => {
    const getAllsetClients = async () => {
      try {
        const data = await axios.get ('http://localhost:3001/user');
        setClients (data.data);
      } catch (error) {
        console.log (error);
      }
    };

    getAllsetClients ();
    console.log ('just run once');
  }, []);

  return (
    <div className="table-container">
      <h3 style={{fontWeight: '700'}}>Clients</h3>
      <div className="sub-container">
        <div className="search-bar">
          <input
            type="text"
            className="form-control searching"
            placeholder="Searching...."
          />
          <button className="button button-default button-search">
            Search
          </button>
        </div>
        <div className="button-bar">
          <button
            className="button button-primary button-create"
            onClick={() => {
              setModalShow (true);
            }}
          >
            + Create new user
          </button>
        </div>
      </div>
      <table
        className="table table-hover"
        style={{backgroundColor: '#fff', paddingLeft: '20px'}}
      >
        <thead>
          <tr>
            <th scope="col" style={{width: '100px'}}>
              ID
            </th>
            <th scope="col" style={{width: '250px'}}>Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {client.length !== 0
            ? client.map (
                (item, index) =>
                  item.role == 'user'
                    ? <tr key={index}>
                        <th scope="row" style={{width: '167px'}}>
                          {item._id.substr (14)}
                        </th>
                        <td>{item.fullname}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                      </tr>
                    : null
              )
            : null}
        </tbody>
      </table>
      {modalShow ? (
        <AddUser
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
    </div>
  );
}

export default Client;
