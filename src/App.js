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

function App() {
  return (
    <Container>
      <Header title="Currency converter" />
      <SubHeader title="The current exchange rate" />
      <List />
      <Label title="Currency" extraLabelContent={<Select />} />
      <Form
        label={<Label title="Amount" extraLabelContent={<Input />} />}
        button={<Button />}
      />
      <ReturnValue title=" You will receive: " />
    </Container>
  );
}

export default App;
