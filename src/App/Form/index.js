import { useState } from "react";
import Result from "./Result";
import {
  Fieldset,
  Button,
  FormField,
  Footer,
  LabelText,
  Legend,
  Loading,
  Failure,
} from "./styled";
import { useApiData } from "../useApiData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const ratesData = useApiData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>Please wait a moment loading the current currency...</Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Something went wrong. Please contact support for assistance <br /> or
          try again later!
        </Failure>
      ) : (
        <>
          <Fieldset>
            <Legend>Currency converter</Legend>
            <p>
              <label>
                <LabelText>Amount*:</LabelText>
                <FormField
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Please enter the amount in EURO."
                  autoFocus
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <LabelText>Currency:</LabelText>
                <FormField
                  as="select"
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {!!ratesData.rates &&
                    Object.keys(ratesData.rates).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                </FormField>
              </label>
            </p>
          </Fieldset>

          <p>
            <Button>Exchange</Button>
          </p>

          <Result result={result} />

          <Footer>
            Currency exchange rates are obtained from the European Central Bank.
            Up-to-date as of {ratesData.date}.
          </Footer>
        </>
      )}
    </form>
  );
};

export default Form;
