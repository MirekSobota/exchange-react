import "./style.css";
 const ReturnValue = ({ title, getNewInputValue, getNewCurrency }) => {
    return <p className="returnValue">{title} {getNewInputValue()} {getNewCurrency()}</p>;
  };

export { ReturnValue };
