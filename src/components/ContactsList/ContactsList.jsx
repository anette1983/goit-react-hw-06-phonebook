import { memo } from 'react';
// import PropTypes from 'prop-types';
import ContactstItem from 'components/ContactsItem';
import StyledList from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log('contacts :>> ', contacts);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  // let filtered = contacts;

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        // const filtered сделать здесь
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  const filteredContacts = getFilteredContacts();
  console.log('filteredContacts :>> ', filteredContacts);

  return (
    <StyledList>
      {filteredContacts.map(contact => {
        return (
          <ContactstItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={() => handleDelete(contact.id)}
          />
        );
      })}
    </StyledList>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };

export default memo(ContactsList);
