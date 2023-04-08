import { useEffect, useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  // сюди дописати перевірку, як в стейті
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFormData = useCallback(
    data => {
      const normalizedName = data.name.toLowerCase();
      const dataIncludes = contacts.find(
        contact =>
          contact.name.toLowerCase() === normalizedName ||
          contact.number === data.number
      );
      if (dataIncludes) {
        return toast.error(`${data.name} is already in contacts`);
      }
      const newData = {
        ...data,
        id: nanoid(),
      };

      setContacts(prevContacts => [...prevContacts, newData]);

      // setContacts([...contacts, newData]);
    },
    [contacts]
  );

  const handleFilterChange = e => {
    const target = e.target.value;
    setFilter(target);
  };

  const handleDelete = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm getFormData={getFormData} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        onClick={handleDelete}
      />
    </div>
  );
};

export default App;
