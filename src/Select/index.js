import "./style.css";

const Select = ({ selectCurrency, onChange }) => {
  return (
    <select
      className="select"
      value={selectCurrency}
      onChange={onChange}
    >
      <option value="EURO">EURO</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
    </select>
  );
};

export { Select };
