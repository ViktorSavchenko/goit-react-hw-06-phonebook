import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addFilter} from 'redux/phoneBookSlice'
import './ContactFilter.css';

function ContactFilter() {
  const filterInStore = useSelector((state) => state.phonebook.filter);
  const dispatch = useDispatch();
  
  const onContactFilter = e => {
    const value = e.target.value;
    
    dispatch(addFilter(value));
  };
  
  return (
    <label className="Search-label">
      Find contact by name:
      <input
        className="Search-input"
        type="text"
        name="filter"
        placeholder="Rosie Simpson"
        value={filterInStore}
        onChange={onContactFilter }
        />
    </label>
  )
};

export default ContactFilter;