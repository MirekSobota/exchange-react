// import { useState } from "react";
import "./style.css";

const Form = ({
  select,
  onChange,
  inputValue,
  onFormSubmit,
  setInputValue,
}) => {
  return (
    <form onSubmit={onFormSubmit} className="form ">
      {select}
      <input
        value={inputValue}
        className="form__input"
        required
        type="number"
        inputMode="numeric"
        min="1"
        step="any"
        placeholder="Amount PLN:"
        onChange={onChange(setInputValue)}
      />

      <p>
        <button className="form__button">Exchange</button>
      </p>
    </form>
  );
};
export { Form };
