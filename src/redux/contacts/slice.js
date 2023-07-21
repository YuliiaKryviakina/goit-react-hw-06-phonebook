import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContact,
  filterInputValue,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
