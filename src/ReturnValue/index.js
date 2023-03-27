import "./style.css";
const ReturnValue = ({ title, result }) => {
  return (
    <p className="returnValue">
      {title} {result}
    </p>
  );
};

export { ReturnValue };
