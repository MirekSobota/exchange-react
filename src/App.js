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
  // const [currencyRateValue, setCurrencyRateValue] = useState("");
  // const [newInputValue, setNewInputValue] = useState("");

  const onChange =
    (setter) =>
    ({ target }) => {
      setter(target.value);
    };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getNewInputValue(inputValue);
    setInputValue("");
  };

  const rates = [
    { id: 1, name: "EURO", rate: 4.5 },
    { id: 2, name: "USD", rate: 4.2 },
    { id: 3, name: "GBP", rate: 4.85 },
  ];

  // Works with RESULT v1.0 / 2.0
  // const rates = {
  //   EURO: 4.5,
  //   USD: 4.2,
  //   GBP: 4.85,
  // };

  // const result = () => console.log();

  // const getCurrency = (selectCurrency) => {
  //   if (selectCurrency) {
  //     setCurrencyInput((currencyInput) => [
  //       ...currencyInput,
  //       {
  //         id: currencyInput.length
  //           ? currencyInput[currencyInput.length - 1].id + 1
  //           : 1,
  //         currency: selectCurrency,
  //       },
  //     ]);
  //   }
  // };

  // const result = getCurrency(selectCurrency);

  //RESULT v2.0
  // const calculatingResult = (rates, selectCurrency) => {
  //   const currency = selectCurrency === "EURO" ? "EURO" : selectCurrency === "USD" ? "USD" : selectCurrency === "GBP" ? "GBP" : null;
  //   return currency ? (inputValue / rates[currency]).toFixed(2) : null;
  // };

  //RESULT v1.0
  // const calculatingResult = (rates, selectCurrency) => {
  //   let result;
  //   if (selectCurrency === "EURO") {
  //     const currency = "EURO";
  //     result = inputValue / rates[currency];
  //    return result.toFixed(2)
  //   }

  //   if (selectCurrency === "USD") {
  //     const currency = "USD";
  //     result = inputValue / rates[currency];
  //    return result.toFixed(2)
  //   }

  //   if (selectCurrency === "GBP") {
  //     const currency = "GBP";
  //     result = inputValue / rates[currency];
  //    return result.toFixed(2)
  //   }

  // };

  const getNewInputValue = (inputValue) => {
    setInputValue(Number(inputValue));
  };

  const currencyRate = rates.find(
    (currency) => currency.name === selectCurrency
  );

  const currencyInput = currencyRate ? currencyRate.rate : 0;

  const calculatingResult = (inputValue, currencyInput) =>
    (inputValue / currencyInput).toFixed(2);

  const result = calculatingResult(inputValue, currencyInput);

  return (
    <Container>
      <Header title="Currency converter" />
      <SubContainer>
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
        <ReturnValue
          title="You will receive:  "
          result={result}
          selectCurrency={selectCurrency}
        />
      </SubContainer>
    </Container>
  );
}

export default App;
