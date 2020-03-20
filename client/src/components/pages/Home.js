import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

import '../styles/home.css'

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // so that it dont complain about dependencies
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className="contact-form-container">
        <ContactForm />
      </div>
        <div className="contacts-container">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
