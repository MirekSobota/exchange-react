import { useState } from "react";
import "./style.css";

const Form = ({ getNewInputValue }) => {
  const [newInputValue, setNewInputValue] = useState("");
  const onInputChange = ({ target }) => setNewInputValue(target.value);
  const onFormSubmit = (event) => {
    event.preventDefault();
    getNewInputValue(newInputValue.trim());
    setNewInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form ">
      <input
        value={newInputValue}
        className="form__input"
        required
        type="number"
        inputMode="numeric"
        min="1"
        step="any"
        placeholder="Amount PLN:"
        onChange={onInputChange}
      />

      <p>
        <button className="form__button">Exchange</button>
      </p>
    </form>
  );
};
export { Form };
