import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { deleteContact } from "redux/contactSlice";

import { useDispatch } from "react-redux";

export default function ContactList() {
  const contactsList = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const onHandleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContactsList = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContactsList?.map(({ id, name, number }) => (
        <li key={id} className={css.list_item}>
          {name}: {number}{" "}
          <button
            className={css.button}
            type="button"
            onClick={() => onHandleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ContactList };
