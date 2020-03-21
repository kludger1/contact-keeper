import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

import '../styles/navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}!</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
          <NavLink className="navbar__list--item" activeClassName="is-active" to='/about'>About us</NavLink>
      </li>
      <li>
          <NavLink className="navbar__list--item" activeClassName="is-active" to='/register'>Sign up</NavLink>
      </li>
      <li>
          <NavLink className="navbar__list--item" activeClassName="is-active" to='/login'>Login</NavLink>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary'>
        <h1 className="navbar-icon">CK</h1>
      <ul className="navbar-list">{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};


export default Navbar;
