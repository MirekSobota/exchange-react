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
  const [inputValue, setInputValue] = useState(0);
  const [selectCurrency, setSelectCurrency] = useState("");

  // const rates = [
  //   { id: 1, EURO: 4.5 },
  //   { id: 2, USD: 4.2 },
  //   { id: 3, GBP: 4.85 },
  //   { id: 4, BTC: 72000 },
  //   { id: 5, SVC: 0.5 },
  // ];
  const rates = {
    EURO: 4.5,
    USD: 4.2,
    GBP: 4.85, 
  };

  const calculatingResult = (rates, selectCurrency) => {
    let result;
    if (selectCurrency === "EUR") {
      const currency = "EURO";
      result = inputValue / rates[currency];
     return result.toFixed(2)
    }

    if (selectCurrency === "USD") {
      const currency = "USD";
      result = inputValue / rates[currency];
     return result.toFixed(2)
    }

    if (selectCurrency === "GBP") {
      const currency = "GBP";
      result = inputValue / rates[currency];
     return result.toFixed(2)
    }  
    
  };

  const getNewInputValue = (newInputValue) => {
    setInputValue(Number(newInputValue));
  };

  const result = calculatingResult(rates, selectCurrency);

  return (
    <Container>
      <Header title="Currency converter" />
      <SubContainer>
        <SubHeader title="The current exchange rate" />
        <List />

        <Form
          select={
            <Label
              title="Currency"
              extraLabelContent={
                <Select
                  selectCurrency={selectCurrency}
                  setSelectCurrency={setSelectCurrency}
                />
              }
            />
          }
          getNewInputValue={getNewInputValue}
        />
        <ReturnValue title="You will receive: " result={result} />
      </SubContainer>
    </Container>
  );
}

export default App;
