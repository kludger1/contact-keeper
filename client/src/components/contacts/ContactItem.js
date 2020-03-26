import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

import '../styles/form.css'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact
  } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };
  return (
    <div className='contact-item'>
      <h3 className='contact-name'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'type contact-type-' +
            (type === 'professional' ? 'professional' : 'personal')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li className="contact-text">
            <i className='fas fa-envelope-open contact-icon' />
            {email}
          </li>
        )}
        {phone && (
          <li className="contact-text">
            <i className='fas fa-phone contact-icon' />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='contact-btn-edit'
          onClick={() => setCurrentContact(contact)}
        >
          Edit
        </button>
        <button className='contact-btn-delete' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.prototype = {
  contacts: PropTypes.object.isRequired
};

export default ContactItem;
