import { Container } from "./Container";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { List } from "./List";
import { Label } from "./Label";
import { Select } from "./Select";
import { Form } from "./Form";
import { Input } from "./Input/input";
import { Button } from "./Button";

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
      <p className="form__return">
        You will receive: <span> N/A</span>
      </p>
    </Container>
  );
}

export default App;
