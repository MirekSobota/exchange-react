import "./style.css";

const List = () => (
  <ul className="list list__flex">
    <li>
      EUR/PLN:<span className="list--rate list__flex"></span>
    </li>
    <li>
      USD/PLN:<span className="list--rate list__flex"></span>
    </li>
    <li>
      GBP/PLN:<span className="list--rate list__flex"></span>
    </li>
    <li>
      BTC/PLN:<span className="list--rate list__flex"></span>
    </li>
    <li>
      SVC/PLN:<span className="list--rate list__flex"></span>
    </li>
  </ul>
);

export { List };
