import "./style.css";

const Header = ({ title, formattedDate }) => (
  <header>
    <>
      <p className="header__date">Today is {formattedDate}</p>
      <h1 className="header">{title}</h1>
    </>
  </header>
);

export { Header };
