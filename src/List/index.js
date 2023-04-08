import "./style.css";

const List = ({ currencies }) => (
  <ul className="list list__flex">
    {currencies.map((currency) => (
      <li key={currency.id}>
        {currency.name}
        <span className="list__rate list__flex">{currency.rate}</span>
      </li>
    ))}
  </ul>
);

export { List };
