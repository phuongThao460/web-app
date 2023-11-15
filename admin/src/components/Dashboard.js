import React from 'react';
import {SidebarData} from './SidebarData';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Useraccount from './useraccount';
import {Logo} from './pics';
function Dashboard () {
  return (
    <div style={{height: '100%', display: 'flex'}}>
      <div className="sidebar">
        <ul className="sidebarlist">
          <li className="row" style={{marginTop: '20px'}}>
            <div>
              <Logo /><hr />
            </div>
          </li>

          {SidebarData.map ((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? 'active' : ''}
                onClick={() => (window.location.pathname = val.link)}
              >
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </div>

              </li>
            );
          })}
        </ul>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="navbar-side">
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              paddingRight: '20px',
            }}
          >
            <button style={{width: 'auto', height: 'fit-content'}} className='btn btn-default'>
              <a href='http://localhost:3000/home' style={{textDecoration: "none", color: "white"}}>Go to News-page</a>
            </button>
          </div>

        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<Useraccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Dashboard;
