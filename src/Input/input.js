import "./style.css";
import { useState } from "react";
const Input = ({ getNewInputValue }) => {
  const [newInputValue, setNewInputValue] = useState("");
  const onInputChange = ({ target }) => setNewInputValue(target.value);
  getNewInputValue(newInputValue.trim());
  // setNewInputValue("");

  return (
    <input
      value={newInputValue}
      className="input"
      required
      type="number"
      min="1"
      step="any"
      placeholder="Amount PLN:"
      onChange={onInputChange}
    />
  );
};

export { Input };
