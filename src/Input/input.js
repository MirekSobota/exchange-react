import "./style.css";
import { useState } from "react";
const Input = () => {
  const [newExchangeValue, setNewExchangeValue] = useState("");
  const onInputChange = ({target}) =>  setNewExchangeValue(target.value);
  return (
    <input
      value={newExchangeValue}
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
