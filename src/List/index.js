import { Content, Rates } from "./styled";

const List = ({ currencies }) => (
  <Content>
    {currencies.map((currency) => (
      <li key={currency.id}>
        {currency.name}
        <Rates>{currency.rate}</Rates>
      </li>
    ))}
  </Content>
);

export { List };
