import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { List } from "./List";
import { Label } from "./Label";
import { Select } from "./Select";
import { Form } from "./Form";
import { Input } from "./Input/input";
import { Button } from "./Button";
import { ReturnValue } from "./ReturnValue";
import { SubContainer } from "./SubContainer";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);

  const getNewInputValue = (newInputValue) => {
    setInputValue((inputValue) => newInputValue )
  };

  // console.log(getNewInputValue());
  return (
    <Container>
      <Header title="Currency converter" />
      <SubContainer>
        <SubHeader title="The current exchange rate" />
        <List />
      </SubContainer>

      <SubContainer>
        <Label title="Currency" extraLabelContent={<Select />} />
        <Form
          label={
            <Label
              title="Amount"
              extraLabelContent={<Input getNewInputValue={getNewInputValue} />}
            />
          }
          button={<Button />}
        />
        <ReturnValue title="You will receive: " getNewInputValue={getNewInputValue}  />
      </SubContainer>
    </Container>
  );
}

export default App;
