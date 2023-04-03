import "./style.css";

const List = ({ rates }) => (
  <ul className="list list__flex">
    {rates.map((currency) => (
      <li key={currency.id}>
        {currency.name}
        <span className="list--rate list__flex">{currency.rate}</span>
      </li>
    ))}
  </ul>
);

export { List };
