import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

function App() {
  return (
    <Container>
      <Header title="Currency converter" />
      <SubHeader title="The current exchange rate" />
      <ul className="form__list form__flex">
        <li>
          EUR/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          USD/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          GBP/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          BTC/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          SVC/PLN:<span className="form__list--rate form__flex"></span>
        </li>
      </ul>
      <label className="form__label form__flex">
        Currency
        <br />
        <select className="form__currencyType">
          <option value="EUR">EURO</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="BTC">BTC</option>
          <option value="SVC">SVC</option>
        </select>
      </label>
      <p>
        <form className="form">
          <label className="form__label form__flex">
            Amount
            <br />
            <input
              className="form__filed"
              required
              type="number"
              min="1"
              step="any"
              placeholder="Amount PLN:"
            />
          </label>
        </form>
      </p>
      <p>
        <button className="form__button">Exchange</button>
      </p>
      <p className="form__return">
        You will receive: <span> N/A</span>
      </p>
    </Container>
  );
}

export default App;
