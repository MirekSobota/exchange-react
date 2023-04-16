import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { List } from "./List";
import { Label } from "./Label";
import { Select } from "./Select";
import { Form } from "./Form";
import { Result } from "./Result";
import { SubContainer } from "./SubContainer";
import { useEffect, useState } from "react";
import { currencies } from "./Currencies/currencies";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectCurrency, setSelectCurrency] = useState("EURO");
  const [result, setResult] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const onChange =
    (setter) =>
    ({ target }) => {
      setter(target.value);
    };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const resultValue = calculateResult(inputValue, currencyInput);

    setNewInputValue(inputValue);
    setInputValue("");
    setResult(resultValue);
  };

  const setNewInputValue = (inputValue) => {
    setInputValue(inputValue);
  };

  const currencyRate = currencies.find(
    (currency) => currency.name === selectCurrency
  );

  const currencyInput = currencyRate ? currencyRate.rate : 0;

  const calculateResult = (inputValue, currencyInput) =>
    `${
      inputValue +
      " PLN  = " +
      (inputValue / currencyInput).toFixed(2) +
      selectCurrency
    }`;

  return (
    <Container>
      <SubContainer>
        <Header title="Currency converter" date={date} />
        <SubHeader title="The current exchange rate" />
        <List currencies={currencies} />
        <Form
          select={
            <Label
              title="Currency"
              extraLabelContent={
                <Select
                  selectCurrency={selectCurrency}
                  onChange={onChange(setSelectCurrency)}
                  currencies={currencies}
                />
              }
            />
          }
          onChange={onChange}
          inputValue={inputValue}
          onFormSubmit={onFormSubmit}
          setInputValue={setInputValue}
        />
        <Result result={result} />
      </SubContainer>
    </Container>
  );
}

export default App;
