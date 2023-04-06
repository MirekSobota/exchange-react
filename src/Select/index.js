import "./style.css";

const Select = ({ selectCurrency, setSelectCurrency, onChange }) => {
  return (
    <select
      className="select"
      value={selectCurrency}
      onChange={onChange(setSelectCurrency)}
    >
      <option value="EURO">EURO</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
    </select>
  );
};

export { Select };
