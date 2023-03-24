import "./style.css";
const Input = () => (
  <input
    // value={newExchangeValue}
    className="input"
    required
    type="number"
    min="1"
    step="any"
    placeholder="Amount PLN:"
  />
);

export { Input };
