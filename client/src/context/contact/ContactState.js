import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Tomora Green',
        email: 'ttogreen@gmail.com',
        phone: '555-555-5555',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Lola Brown',
        email: 'lolabrown@yahoo.com',
        phone: '444-444-4444',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Mya Doe',
        email: 'mdoe@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 4,
        name: 'Tina Yams',
        email: 'yamst@hotmail.com',
        phone: '232-232-2325',
        type: 'personal'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set CurrentContact
  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contact
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
