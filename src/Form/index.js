import { useState } from "react";

const Form = ({ label, button }) => {

// const [newExchangeValue, setNewExchangeValue] = useState();
const onFormSubmit = (event) => {
  event.preventDefault();
};

  return (
    <>
      <form onSubmit={onFormSubmit}>
        {label}
        {button}
      </form>
    </>
  );
}


export { Form };

