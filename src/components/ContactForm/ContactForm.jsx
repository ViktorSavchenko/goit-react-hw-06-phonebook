import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addContact} from 'redux/phoneBookSlice'
import './ContactForm.css'

function ContactForm() { 
  const  [name, setName ] = useState('');
  const [number, setNumber] = useState('');
  const contactsInStore = useSelector((state) => state.phonebook.contacts);
  const dispatch = useDispatch();
    
  const onInputChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    };
  };
  
  const onFormSubmit = e => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const number = e.target.number.value;
    const contact = { id: nanoid(), name, number };    

    const isDuplicateName = duplicateNameCheck(name);
    
    if (isDuplicateName) { 
      return alert(`${name} is already in contacts!`)
    }; 
    
    dispatch(addContact(contact));
    
   reset();
  };
  
    const duplicateNameCheck = name => { 
    const normalizedAddedName = name.toLowerCase().trim();
    
    return contactsInStore.find(({ name }) => (
      name.toLowerCase() === normalizedAddedName
    ))
  };  
  
  const reset = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <form className="Form" onSubmit={onFormSubmit}>
      <label className="Form-label">
        Name
        <input
          className="Form-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Rosie Simpson"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>
            
      <label className="Form-label" >
        Number
        <input
          className="Form-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="777-777-77-77"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>
            
      <br />
          
      <button type="submit" className="Form-btn">Add contact</button>
    </form>
  );
};

export default ContactForm;