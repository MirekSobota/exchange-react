import { Input, Button } from "./styled";

const Form = ({
  select,
  onChange,
  inputValue,
  onFormSubmit,
  setInputValue,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      {select}
      <Input
        value={inputValue}
        required
        type="number"
        min="1"
        step="any"
        placeholder="Amount PLN:"
        onChange={onChange(setInputValue)}
      />
      <p>
        <Button>Exchange</Button>
      </p>
    </form>
  );
};
export { Form };
