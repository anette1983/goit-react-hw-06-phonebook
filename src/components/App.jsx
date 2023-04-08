// import { useCallback } from 'react';
// import { nanoid } from 'nanoid';

// import 'react-toastify/dist/ReactToastify.css';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
