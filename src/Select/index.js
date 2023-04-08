import "./style.css";

const Select = ({ selectCurrency, onChange, currencies }) => {
  return (
    <select className="select" value={selectCurrency} onChange={onChange}>
      {currencies.map((currency) => (
        <option key={currency.id} value={currency.name}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export { Select };
