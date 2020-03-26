import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

import "../../App.css";
import "../styles/form.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {
    addContact,
    updateContact,
    clearCurrentContact,
    current
  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="contact-form-header">
        <h2 className="header-title">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
      </div>
      <input
        className="input contact-form-input"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="input contact-form-input"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className="input contact-form-input"
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5 className="radio-header">Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="input-btn contact-form-btn"
        />
      </div>
      {current && (
        <div>
          <button className="input-btn contact-form-btn" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
