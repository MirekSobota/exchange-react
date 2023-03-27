import "./style.css";
const Select = ({ selectCurrency, setSelectCurrency }) => {
  const onSelectChange = ({ target }) => setSelectCurrency(target.value);
  return (
    <select className="select" value={selectCurrency} onChange={onSelectChange}>
      <option value="EUR">EURO</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="BTC">BTC</option>
      <option value="SVC">SVC</option>
    </select>
  );
};

export { Select };
