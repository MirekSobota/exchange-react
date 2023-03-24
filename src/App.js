import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { List } from "./List";
import { Label } from "./Label";
import { Select } from "./Select";

function App() {
  return (
    <Container>
      <Header title="Currency converter" />
      <SubHeader title="The current exchange rate" />
      <List />
      <Label title="Currency" extraLabelContent={<Select/>}/>
      
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
