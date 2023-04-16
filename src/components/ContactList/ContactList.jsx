import React from "react";
import PropTypes from 'prop-types';
import ContactPerson from '../ContactPerson/ContactPerson';
import './ContactList.css';

function ContactList({ contacts }) {  
  return (
    <ul className="Contact-list">
        {contacts.map(({ id, name, number }, index) => (     
            <ContactPerson key={id} count={index} contact={name} number={number} id={id}/>
        ))}        
      </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }))
};


export default ContactList;