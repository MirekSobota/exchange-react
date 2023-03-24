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


function App() {

  const getNewInputValue = (newInputValue) => {
    console.log(newInputValue)
  };

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
          label={<Label title="Amount" extraLabelContent={<Input getNewInputValue={getNewInputValue}/>} />}
          button={<Button />}
        />
        <ReturnValue title=" You will receive: " />
      </SubContainer>
    </Container>
  );
}

export default App;
