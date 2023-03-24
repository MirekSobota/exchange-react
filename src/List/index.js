import "./style.css";

const List = () => (
    <ul className="form__list form__flex">
        <li>
          EUR/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          USD/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          GBP/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          BTC/PLN:<span className="form__list--rate form__flex"></span>
        </li>
        <li>
          SVC/PLN:<span className="form__list--rate form__flex"></span>
        </li>
      </ul>
);

export {List};