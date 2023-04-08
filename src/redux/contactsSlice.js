import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const persistConfig = {
  key: 'contacts',
  storage,
  //   если хотм=им сохр неск значение
  //   whitelist: ['value', 'a'],
  // блеклист - если все, кроме одного
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        // state.contacts.push(action.payload);
        // return [...state, action.payload];
      },
      prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            ...newContact,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      /** */
    },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
