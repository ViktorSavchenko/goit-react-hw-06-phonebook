import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import './App.css';

function App() {
  const contactsInStore = useSelector((state) => state.phonebook.contacts);
  const filterInStore = useSelector((state) => state.phonebook.filter);
  
  const getFilteredContacts = () =>
  (contactsInStore.filter(({ name }) => (name.toLowerCase().includes(filterInStore.toLowerCase())))
  );
  
  const filteredContacts = getFilteredContacts();
    
  return (
    <div className="Contacts-container">
      <h1 className="Title Hero-title">Phonebook</h1>
      <ContactForm />
        
      <h2 className="Title Contact-title">Contacts:</h2>
      
      <ContactFilter />
      
      {filteredContacts.length !== 0 ?
        <ContactList
          contacts={filteredContacts} /> :
        <h2 className="Title Nothing-title">&#9785; you don`t have contacts!</h2>
      }
    </div>
  );
};

export default App;
