import { Content } from "./styled";

const Select = ({ selectCurrency, onChange, currencies }) => {
  return (
    <Content value={selectCurrency} onChange={onChange}>
      {currencies.map((currency) => (
        <option key={currency.id} value={currency.name}>
          {currency.name}
        </option>
      ))}
    </Content>
  );
};

export { Select };
