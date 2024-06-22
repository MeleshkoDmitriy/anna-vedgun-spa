import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import '../../../styles/global.scss'

import { Paths } from "../../../constants/Paths";

export const Header = () => {
  return (
  <header>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>Anna Vedgun</h1>
        </div>
        <nav>
          <ul className={styles.links}>
            <li><Link to={Paths.HOME}>Home</Link></li>
            <li><Link to={Paths.ABOUT}>About</Link></li>
            <li><Link to={Paths.CONTACTS}>Contacts</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>);
};
