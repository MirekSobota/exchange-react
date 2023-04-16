import "./style.css";

const Header = ({ title, date }) => (
  <header>
    <>
      <p className="header__date">
        Today is {date.toLocaleDateString("en-EN", { weekday: "long" })},{" "}
        {date.toLocaleDateString(undefined, { day: "numeric", month: "long" })},{" "}
        {date.toLocaleTimeString()}
      </p>
      <h1 className="header">{title}</h1>
    </>
  </header>
);

export { Header };
