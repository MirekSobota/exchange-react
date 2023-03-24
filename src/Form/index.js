const Form = ({ label, button }) => {
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
};

export { Form };
