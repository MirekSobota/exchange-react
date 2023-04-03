import "./style.css";
const ReturnValue = ({ title, result, selectCurrency }) => {
  return (
    <p className="returnValue">
      {title}
      {result}
      {selectCurrency}
    </p>
  );
};

export { ReturnValue };
