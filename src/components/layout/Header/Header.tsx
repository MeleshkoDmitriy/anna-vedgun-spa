import styles from './Header.module.scss';
import '../../../styles/global.scss';
import { NavLinks } from '../../NavLinks/NavLinks';
import { Paths } from '../../../constants/Paths';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to={Paths.HOME}>
              <h1 className={styles.title}>Анна Ведьгун</h1>
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};
