import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext';

const CONTACT = {
  _id: 1,
  name: 'katleen',
  email: 'katleenludger@yahoo.com',
  phone: '7865153347',
  type: 'professional'
}

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>{'You have no contacts :('}</h4>;
  }

  return (
    <Fragment>
      {/*{contacts !== null && !loading ? (*/}
      {/*  filtered !== null ? (*/}
      {/*    filtered.map(contact => (*/}
      {/*      <ContactItem key={contact._id} contact={contact} />*/}
      {/*    ))*/}
      {/*  ) : (*/}
      {/*    contacts.map(contact => (*/}
            <ContactItem key={1} contact={CONTACT} />
      {/*    ))*/}
      {/*  )*/}
      {/*) : (*/}
      {/*  <Spinner />*/}
      {/*)}*/}
    </Fragment>
  );
};

export default Contacts;
