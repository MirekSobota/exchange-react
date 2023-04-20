import "./style.css";

const DateAndTime = ({ date }) => {
  const formattedDate = date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
return (
  <div className="header__date">Today is {formattedDate}</div>
);
  
};

export { DateAndTime };
