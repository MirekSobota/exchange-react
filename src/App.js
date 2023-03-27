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

  const getNewInputValue = (newInputValue) => {
    setInputValue(Number(newInputValue));
  };

  // const getNewCurrency = (selectCurrency) => setSelectCurrency(selectCurrency);

  return (
    <Container>
      <Header title="Currency converter" />
      <SubContainer>
        <SubHeader title="The current exchange rate" />
        <List />
        <Label title="Currency" extraLabelContent={<Select selectCurrency={selectCurrency} setSelectCurrency={setSelectCurrency} />} />
        <Form         
          getNewInputValue={getNewInputValue}
        />
        <ReturnValue
          title="You will receive: "
          getNewInputValue={() => inputValue}
          getNewCurrency={() => selectCurrency}
        />
      </SubContainer>
    </Container>
  );
}

export default App;
