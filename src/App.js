import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { List } from "./List";
import { Label } from "./Label";
import { Select } from "./Select";
import { Form } from "./Form";
import { ReturnValue } from "./ReturnValue";
import { SubContainer } from "./SubContainer";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectCurrency, setSelectCurrency] = useState("EURO");
  const [result, setResult] = useState("");
  const onChange =
    (setter) =>
    ({ target }) => {
      setter(target.value);
    };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getNewInputValue(inputValue);
    setInputValue("");
    const resultValue = calculatingResult(inputValue, currencyInput);
    setResult(resultValue);
  };

  const rates = [
    { id: 1, name: "EURO", rate: 4.55 },
    { id: 2, name: "USD", rate: 3.95 },
    { id: 3, name: "GBP", rate: 4.85 },
  ];

  const getNewInputValue = (inputValue) => {
    setInputValue(Number(inputValue));
  };

  const currencyRate = rates.find(
    (currency) => currency.name === selectCurrency
  );

  const currencyInput = currencyRate ? currencyRate.rate : 0;

  const calculatingResult = (inputValue, currencyInput) =>
    `${
      inputValue +
      " PLN  = " +
      (inputValue / currencyInput).toFixed(2) +
      selectCurrency
    }`;

  return (
    <Container>
      <SubContainer>
        <Header title="Currency converter" />
        <SubHeader title="The current exchange rate" />
        <List rates={rates} />
        <Form
          select={
            <Label
              title="Currency"
              extraLabelContent={
                <Select
                  selectCurrency={selectCurrency}
                  setSelectCurrency={setSelectCurrency}
                  onChange={onChange}
                />
              }
            />
          }
          onChange={onChange}
          inputValue={inputValue}
          onFormSubmit={onFormSubmit}
          setInputValue={setInputValue}
        />
        <ReturnValue result={result} />
      </SubContainer>
    </Container>
  );
}

export default App;
