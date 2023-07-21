import { useDispatch } from "react-redux";
import { useRef } from "react";
import { filterContact } from "redux/contacts/slice";
import css from "./Filter.module.css";

const Filter = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleOnChange = () => {
    const input = inputRef.current.value;
    dispatch(filterContact(input));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by name: </label>
      <input
        ref={inputRef}
        className={css.filterName}
        type="text"
        placeholder="Enter filter"
        onChange={handleOnChange}
      />
    </div>
  );
};

export { Filter };
