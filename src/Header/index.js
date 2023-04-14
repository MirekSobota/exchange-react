import "./style.css";

const Header = ({ title, date }) => (
  <header>
    <>
    <p>{date.toLocaleDateString(undefined, { day: "long", day: "numeric", month: "long"})}</p>
    <h1 className="header">{title}</h1>
    </>    
  </header>
);

export { Header };
