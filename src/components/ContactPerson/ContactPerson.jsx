import React from "react";
import { useDispatch } from 'react-redux'
import { removeContact} from 'redux/phoneBookSlice'
import PropTypes from 'prop-types';
import './ContactPerson.css'

function ContactPerson({ count, contact, number, id }) {
  const dispatch = useDispatch();
  
  const onClickDelite = (id) => {
    dispatch(removeContact(id));
  };
  
  const countContact = count + 1;
  
  return (
    <li className="Contact-item">
      <div>{countContact}.</div>
      
      <div className="Contact-name">{contact}</div>
      
      <div className="Contact-wrapper">
      <a href={`tel: ${number}`} className="Contact-number">tel: {number}</a>
      
      <button className="Contact-delbtn" type="button" onClick = {()=>{onClickDelite(id)}}>X</button>
      </div>
    </li>
  )
}

ContactPerson.propTypes = {
  count: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ContactPerson;