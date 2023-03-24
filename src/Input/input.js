import "./style.css";
const Input = () => (
  <input
    className="input"
    required
    type="number"
    min="1"
    step="any"
    placeholder="Amount PLN:"
  />
);

export { Input };
