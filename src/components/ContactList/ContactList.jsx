import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getContactsList, getFilter } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/slice";

import { useDispatch } from "react-redux";

const ContactList = () => {
  const contactsList = useSelector(getContactsList);
  const filter = useSelector(getFilter);
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
};

export { ContactList };
